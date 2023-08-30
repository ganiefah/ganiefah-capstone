const db = require("../config");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/AuthenticateUser");
class Users {
  fetchUsers(req, res) {
    const query = `
            SELECT userID, firstName, surName, userAge, Gender, userRole, emailAdd, userPass, profileURL FROM Users;
        `;
    db.query(query, (err, results) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          results,
        });
      } else {
        res.json({
          err,
          msg: "Error has occurred.",
        });
      }
    });
  }
  fetchUser(req, res) {
    const query = `
        SELECT userID, firstName, surName, userAge, Gender, userRole, emailAdd, userPass, profileURL FROM Users WHERE userID = ${req.params.id}
        `;
    db.query(query, (err, result) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          result,
        });
      } else {
        res.json({
          err,
          msg: "Error has occurred.",
        });
      }
    });
  }
  users 
async register(req, res) {
    const data = req.body;
    data.userPass = await hash(data.userPass, 16);
    const user = {
      emailAdd: data.emailAdd,
      userPass: data.userPass,
    };

    const query = `
            INSERT INTO Users SET ?
        `;
    db.query(query, [req.body], (err) => {
      if (!err) {
        let token = createToken(user);
        res.json({
          status: res.statusCode,
          token,
          msg: "User registered successfully.",
        });
      } else {
        res.json({
          err,
          msg: "An error occurred.",
        });
      }
    });
  }
  async login(req, res) {
    const { emailAdd, userPass } = req.body;
    const query = `
            SELECT userID, firstName, surName, userAge, Gender, userRole, emailAdd, userPass, profileURL  FROM Users
            WHERE emailAdd = ?
        `;
    db.query(query, [emailAdd], async (err, result) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: "An error has occurred.",
        });
      }
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "You are providing the wrong email or password.",
        });
      } else {
        await compare(userPass, result[0].userPass, (err, Result) => {
          if (err) throw err;
          const token = createToken({
            emailAdd,
            userPass,
          });
          if (Result) {
            res.json({
              msg: "Logged in successfully.",
              token,
              cResult: Result[0],
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: "Invalid Login details, Please retry.",
            });
          }
        });
      }
    });
  }
  updateUser(req, res) {
    const query = `
            UPDATE Users SET ? WHERE userID = ${req.params.id}
        `;
    db.query(query, [req.body], (err) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          msg: "User profile updated successfully.",
        });
      } else {
        res.json({
          err,
          msg: "An error occurred.",
        });
      }
    });
  }
  removeUser(req, res) {
    const query = `
            DELETE FROM Users WHERE userID = ${req.params.id}
        `;
    db.query(query, (err) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          msg: "User record deleted successfully.",
        });
      } else {
        res.json({
          status: res.statusCode,
          err,
          msg: "An error occurred.",
        });
      }
    });
  }
}

module.exports = { Users };