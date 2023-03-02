<template>
    <div class="user-profile">
      <h3>User Profile</h3>
      <UserProfileView :user="user" />
    </div>
  </template>
  
  <script>
  import UserProfileView from './UserProfileView.vue'
  
  export default {
    name: 'UserProfileComponent',
    components: {
      UserProfileView
    },
    data() {
      return {
        user: {
            
        }
      }
    }
  }
  </script>
  
  
  <style>
  </style>
  