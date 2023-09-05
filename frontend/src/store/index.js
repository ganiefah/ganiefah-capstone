import { createStore } from 'vuex'
import axios from "axios";
const capstone = "https://capstone-api2.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: null,
    token: null,
    chosenProduct: null
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setSingleProduct(state, product){
      state.chosenProduct = product
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
      console.log(products);
    },
    setProduct(state, product) {
      state.product = product;
    },
    setSpinner(state, spinner) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${capstone}users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occurred");
      }
    },
    async fetchUser(context) {
      try {
        const { data } = await axios.get(`${capstone}user`);
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occurred");
      }
    },
    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${capstone}products`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occurred");
      }
    },
    async fetchProduct(context) {
      try {
        const { data } = await axios.get(`${capstone}product`);
        context.commit("setProduct", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occurred");
      }
    },
    async login(context, payload){
      const res = await axios.post(`${capstone}login`, payload)
      const { err, msg, token, cResult } = res.data
      if(msg === "You are providing the wrong email or password, please check and retry"){
        context.commit("setMsg", "Login Failed")
      } else if(msg === "Logged in successfully" && cResult){
        context.commit("setLogStatus", "Logged in")
        context.commit("setUser", cResult)
        Cookies.set("Logged", token, {
          expires: 2
        })
      } else if(err){
        context.commit("setMsg", "Login Failed, Please Check And Retry")
      }
    },
    async registerUser(context, user) {
        console.log("Starting registration process...");
        console.log(user)
      try {
        console.log("payload: ", user)
        const res = await axios.post(`${capstone}register`, user.UserID);
        console.log(res.data)
        const { results, err } = await res.data;
        console.log(results, err) 
        if (results) {
          console.log("User registered successfully:", results[0]); 
          context.commit("setUser", results[0]);
          context.commit("setSpinner", false);
        } else {
          console.log("Registration error:", err);
          context.commit("setMsg", err);
        }
      } catch (e) {
        console.error("An error occurred:", e);
        context.commit("setMsg", "an error occurred");
      }
    },
    
    async updateUser(context, payload) {
      try {
        const { res } = await axios.patch(`${capstone}user/${payload.UserID}`, payload);
        const {msg, err} = res.data
        if(msg){
          context.commit("setUser", msg)
        }
        if(err){
          context.commit("setMsg", err)
        }
      } catch (e) {
        context.commit("setMsg", "an error occurred");
      }
    },
    async deleteUser(context, UserID) {
      try {
        const res = await axios.delete(`${capstone}user/${UserID}`);
        if(res.status === 200){
          context.commit('setUser', res.data.msg)
        } else{
          context.commit('setMsg', "an error occurred, please try again")
        }
      } catch (e) {
        console.error('Error while deleting user: ', e)
        context.commit("setMsg", "an error occurred");
      }
    },
    async addProduct(context, payload) {
      console.log("REACHED");
      try {
        const { res } = await axios.post(`${capstone}product`, payload);
        const { results, err } = await res.data;
        if (results) {
          context.commit("setProduct", results[0]);
          context.commit("setSpinner", false);
        } else {
          context.commit("setMsg", msg);
        }
      } catch (e) {
        context.commit("setMsg", "an error occurred");
      }
    },
    async updateProduct(context, payload) {
      try {
        const res = await axios.patch(`${capstone}product/${payload.prodID}`, payload);
        const { msg, err } = res.data
        if(msg){
          context.commit("setProduct", msg)
        }
        if(err){
          context.commit("setMsg", err)
        }
      } catch (e) {
        context.commit("setMsg", "an error occurred");
      }
    },
    async removeProduct(context, prodID) {
      try {
        const { res } = await axios.delete(`${capstone}product/${prodID}`);
        const { msg, err } = await res.data;
        if (msg) {
          context.commit("setProduct", msg);
        } else {
          context.commit("setMsg", err);
        }
      } catch (e) {
        context.commit("setMsg", "an error occurred");
      }
    },
  },
  modules: {},
});
