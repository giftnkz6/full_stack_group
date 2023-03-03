<template>
  <div class="home">
    <div class="text">
      <h1>WELCOME TO THE GIFTED WISE CLOTHING STORE</h1>
    </div>
    <div class="container-fluid">
      <img src="https://i.postimg.cc/Vkj5jwS8/th-id-OIP.jpg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeView',
  components: {
  }
}
</script>
<style>
  .text{
    margin: auto;
  }
  h1{
    font-size: 3rem;
    /* color: grey; */
    text-align: center;
    text-shadow: 2px 1px white;
  }
  img{
    width: 40vw;
  }
  .home{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    margin-top: 3rem;
  }
  /* body{
    background-color: coral;
  } */
  @media screen and (min-width: 800) {
    .home{
      display: grid;
      grid-template-columns: 1fr;
    }
  }
</style>