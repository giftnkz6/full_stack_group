<template>
    <div class="product-view">
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>{{ product.category }}</p>
      <img :src="product.image" :alt="product.name">
      <p>Price: ${{ product.price }}</p>
      <button @click="viewMore">View More</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductsView',
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
      viewMore() {
        
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  