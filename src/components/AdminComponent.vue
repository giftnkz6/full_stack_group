<template>
    <div class="admin">
      <h2>Admin Component</h2>
      <form @submit.prevent="addUser">
        <label>
          User ID:
          <input type="text" v-model="newUser.userId" required>
        </label>
        <label>
          First Name:
          <input type="text" v-model="newUser.firstName" required>
        </label>
        <label>
          Last Name:
          <input type="text" v-model="newUser.lastName" required>
        </label>
        <label>
          Gender:
          <select v-model="newUser.gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Cellphone Number:
          <input type="text" v-model="newUser.cellphoneNumber" required>
        </label>
        <label>
          Email Address:
          <input type="email" v-model="newUser.emailAdd" required>
        </label>
        <label>
          User Password:
          <input type="password" v-model="newUser.userPass" required>
        </label>
        <label>
          User Profile:
          <select v-model="newUser.userProfile" required>
            <option value="admin">Admin</option>
          </template>
<style>

</style>