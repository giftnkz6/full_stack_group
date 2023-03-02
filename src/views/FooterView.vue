<template>
    <div>
      <HeaderComponent />
      <MainView />
      <FooterComponent />
    </div>
  </template>
  
  <script>

  import FooterComponent from './FooterComponent.vue'
  
  export default {
    name: 'App',
    components: {
      FooterComponent
    }
  }
  </script>

<style>
footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    color: #fff;
    padding: 20px;
    text-align: center;
}
  
footer a {
    color: #fff;
    justify-content: space-between;
}

ul{
    display: inline-flex;
    justify-content: space-between;
}

ul li {
    margin: 10px;
    list-style: none;
}

ul li a {
    text-decoration: none;
    
}
a:hover {
    color: palevioletred;
}
    
</style>