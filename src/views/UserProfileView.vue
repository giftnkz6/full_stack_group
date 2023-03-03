<template>
    <div class="user-profile-view">
      <h2>User Profile View</h2>
      <img :src="user.imgURL" alt="User Picture" />
      <h3>{{ user.firstName }} {{ user.lastName }}</h3>
      <p>Gender: {{ user.gender }}</p>
      <p>Cellphone Number: {{ user.cellphoneNumber }}</p>
      <p>Email Address: {{ user.emailAdd }}</p>
      <p>User Profile: {{ user.userProfile }}</p>
      <p>Join Date: {{ user.joinDate }}</p>
    </div>
</template>
  
<script>
  export default {
    name: 'UserProfileView',
    props: {
      user: {
        type: Object,
        required: true
      }
    }
}
  </script>
  
  <style>

  </style>
  