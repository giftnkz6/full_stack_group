<template>
  <div class="container">
    <div lass="prods" v-for="product in products" :key="product.id">
      <div class="card" style="width: 18rem;">
          <img :src="product.imgURL" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">{{ product.prodName }}</h5>
              <p class="card-text">{{product.prodDescription}}</p>
              <p class="card-text">{{product.price}}</p>
              <a href="#" class="btn btn-primary">View More</a>
          </div>
      </div>
  </div>
</div>

</template>
  
  <script>
 export default {
      name: 'AdminView',
      components: {
      },
      computed: {
          products() {
              return this.$store.state.products;
          },
      },
      mounted() {
          this.$store.dispatch("getProducts")
      },
  }
  </script>
  
<style>

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.card{
  margin-top: 2rem;
  margin-bottom: 1rem;
/* box-shadow: 0 0 25px purple;*/
  column-gap: 5px;
  width: 9px;
}

img{
  width: 80vw;
}

  
</style>
  