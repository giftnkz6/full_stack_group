<template>
  <template>
    <div class="admin-view">
      <h1>Admin View</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Cellphone Number</th>
            <th>Email Address</th>
            <th>User Password</th>
            <th>User Profile</th>
            <th>Join Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.userId }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.cellphoneNumber }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.userPass }}</td>
            <td>{{ user.userProfile }}</td>
            <td>{{ user.joinDate }}</td>
            <td>
              <button @click="editUser(user)">Edit</button>
              <button @click="deleteUser(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <!-- <script>
  export default {
    name: 'AdminView',
    props: {
      users: {
        type: Array,
        required: true
      }
    },
    methods: {
      editUser(user) {

      },
      deleteUser(index) {

      }
    }
  }
  </script> -->

  

  

</template>

<style>
table{
/*  display: inline;*/
  border: 1px;
  text-align: center;
  position: absolute;
  padding: 0px;
  font-size: 9px;
}
h6{
  margin-bottom: 30px;
  margin-top: 10px;
}

.btn{
  font-size: 5px;
  
}

</style>
