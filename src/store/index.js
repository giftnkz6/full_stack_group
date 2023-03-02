import { createStore } from 'vuex'
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    loadSpinner: true
  },
  mutations: {
    setUsers(state, values){
      state.users = values
    },
    setProducts(state, values) {
      state.products = values
    },
    setUser(state, value) {
      state.user = value
    },
    setProduct(state, value){
      state.product = value
    },
    setSpinner(state, value) {
      state.loadSpinner = value
    },
  },
  actions: {
    getUsers: async(context) => {
      fetch("https://full-stack-group.onrender.com/users")
        .then((res) => res.json())
        .then((users) => context.commit("setUsers", users));
    },
    getProducts: async(context) => {
      fetch("https://full-stack-group.onrender.com/products")
        .then((res) => res.json())
        .then((products) => context.commit("setProducts", products));
    },
    getUser: async(context) => {
      fetch("https://full-stack-group.onrender.com/user/" + id)
        .then((res) => res.json())
        .then((user) => context.commit("setuser", user));
    },
    getProduct: async(context) => {
      fetch("https://full-stack-group.onrender.com/product" + id)
        .then((res) => res.json())
        .then((product) => context.commit("setProduct", product));
    },
    register: async(context, payload) => {
      const {firstName, lastName, gender, cellphoneNumber, emailAdd, userPass, userRole, userProfile, joinDate} = payload
      const res = await fetch('https://full-stack-group.onrender.com/users',{
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          gender,
          cellphoneNumber,
          emailAdd,
          userPass,
          userProfile,
          joinDate
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
      },
    login: async(context, payload) => {
      const { emailAdd, userPass } = payload;
      const response = await fetch(
        `https://full-stack-group.onrender.com/users?emailAdd=${emailAdd}&userPass${userPass}`
      );
      const personalDetails = await response.json();
      context.commit("setUser", personalDetails[0]);
    },
    editUser: async(context, user) => {
      fetch("https://full-stack-group.onrender.com/user/" + user.id, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getUsers"));
    },
    editProduct: async(context, product) => {
      fetch("https://full-stack-group.onrender.com/product/" + product.id, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getUsers"));
    },
    deleteUser: async(context, id) => {
      fetch("https://full-stack-group.onrender.com/user/" + id, {
        method: "DELETE",
      }).then(() => context.dispatch("getUsers"));
    },
    deleteProduct: async(context, id) => {
      fetch("https://full-stack-group.onrender.com/product/" + id, {
        method: "DELETE",
      }).then(() => context.dispatch("getProducts"));
    },
  },
  modules: {
  }
})