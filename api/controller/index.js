const express = require("express");
const bodyParser = require("body-parser");
const { verifyAToken } = require("../middleware/AuthenticateUser");
const routes = express.Router();
const { users, products } = require("../model");

// ========== User routes ==========
routes.get("/users", (req, res) => {
  users.fetchUsers(req, res);
});
routes.get("/user/:userID", (req, res) => {
  users.fetchUser(req, res);
});
routes.patch("/user/:userID", bodyParser.json(), (req, res) => [
  users.updateUser(req, res),
]);
routes.post("/register", bodyParser.json(), (req, res) => {
  users.register(req, res);
});
routes.post("/login", bodyParser.json(), (req, res) => {
  users.login(req, res);
});
routes.delete("/user/:userID", (req, res) => {
  users.removeUser(req, res);
});

// ========== Profile routes ===========
exports.profile = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({
      message: "Access denied.Please retry",
    });
  }
  const decUser = verifyAToken(token);
  if (!decUser) {
    return res.status(403).json({ message: "Invalid token" });
  }
  res.json({ message: "User profile retrieved successfully" });
};

module.exports = { express, routes };

// ========== Product routes ===========
routes.get("/products", (req, res) => {
  products.fetchProducts(req, res);
});
routes.get("/product/:prodID", (req, res) => {
  products.fetchProduct(req, res);
});
routes.post("/product", bodyParser.json(), (req, res) => {
  products.addProduct(req, res);
});
routes.patch("/product/:prodID", bodyParser.json(), (req, res) => {
  products.updateProduct(req, res);
});
routes.delete("/product/:prodID", (req, res) => {
  products.deleteProduct(req, res);
});
