<template>
    <div class="products">
      <div v-for="product in products" :key="product.id" class="product">
        <img :src="product.image" :alt="product.name">
        <h3>{{ product.name }}</h3>
        <p>Price: ${{ product.price }}</p>
        <button @click="viewMore(product)">View More</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductsComponent',
    props: {
      products: {
        type: Array,
        required: true
      }
    },
    methods: {
      viewMore(product) {
        
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  