<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/products">Shop</router-link> |
    <router-link to="/admin">Admin</router-link> |
    <router-link to="/login">Log-in</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/userProfile">User Profile</router-link>
  </nav>
  <router-view/>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #14134A;
  padding: 0;
  margin: 0;
  font-family: monospace;
  height: 200px;
  background-image: linear-gradient(to bottom right, D49EF3, F37C8D);
}

nav {
  padding: 0px;
}

nav a {
  font-weight:lighter;
  color:#14134A;
}

nav a.router-link-exact-active {
  color: #A300FF;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  color:#14134A;
  padding: 0px;
  text-align: center;
}

footer a {
  color:#14134A;
  justify-content: space-between;
}

ul{
  display: inline-flex;
  justify-content: space-between;
}

ul li {
  margin: 5px;
  list-style: none;
}

ul li a {
  text-decoration: none; 
}
ul li a.hover-exact-active {
  color:  #ffe100;
}
</style>
