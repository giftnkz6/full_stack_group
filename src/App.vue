<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/products">Products</router-link>
  </nav> -->
  <NavBar/>
  <router-view/>
  <!-- <FooterVue/> -->
</template>
<script>
  import NavBar from '@/components/NavBar.vue'
  import FooterVue from '@/components/FooterVue.vue'
  export default{
    name: 'App',
    components:{
      NavBar,
      FooterVue
    }
  }
</script>
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
  height: 100vh;
/*  background-image: url("https://i.postimg.cc/FRw4n76B/DBQr329-Xk-AADJGg.jpg");*/
  background-repeat: no repeat;
  background-size: cover;
  
}
img{
  width: 5rem;
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
/*  margin: auto;*/
  position: absolute;
  margin-bottom: 0px;
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
  color:  #FFE100;
}
nav a.router-link-exact-active {
  color: #42B983;
}
</style>