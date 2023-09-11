import { createStore } from 'vuex'
import axios from "axios";
import sweet from 'sweetalert'
import router from '@/router'
import {useCookies} from 'vue3-cookies'
const {cookies} = useCookies()
import authenticateUser from '@/services/authenticateUser';
const capstone = "https://capstone-api2.onrender.com/";
const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: null,
    token: null,
    msg: null,
    chosenProduct: null,
    cart: storedCart,
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
    setMsg(state, msg) {
      state.msg = msg;
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, productIndex) {
      state.cart.splice(productIndex, 1);
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
    async login(context, payload) {
      try {
        const { msg, token, Result } = (
          await axios.post(`${capstone}login`, payload)
        ).data;
        console.log( msg, token, Result);
        if (Result) {
          context.commit("setUser", Result);
          cookies.set("LegitUser", { msg, token, Result });
          localStorage.setItem("user", JSON.stringify(Result))
          authenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back ${Result?.firstName} ${Result?.surName}`,
            icon: "success",
            timer: 4000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000,
          });
        }
      } catch (e) {
        context.commit(console.log((e)));
      }
    },
    //register
    async addUser(context, payload) {
      try {
        const { msg } = (await axios.post(`${capstone}register`, payload)).data;
        if (msg) {
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          context.dispatch("fetchUsers");
          router.push({ name: "login" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000
          });
        }
      } catch (e) {
        context.commit(console.log(e))
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
  async addToCartAction(context, product) {
    context.commit('addToCart', product);
    localStorage.setItem('cart', JSON.stringify(context.state.cart));
  },
  async removeFromCartAction(context, productIndex) {
    context.commit('removeFromCart', productIndex);
  },

  },
  modules: {},
});
