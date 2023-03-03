<template>
  <div class="admin-view">
    <table class="table" >
      <thead>
        <tr>
          <th scope="col">User ID</th>
          <th scope="col">FirstName</th>
          <th scope="col">LastName</th>
          <th scope="col">Gender</th>
          <th scope="col">cellphone number</th>
          <th scope="col">Email Address</th>
          <!-- <th scope="col">User Password</th> -->
          <th scope="col">User Profile</th>
          <th scope="col">Join Date</th>
          <th scope="col">Edit/Delete</th>
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
          <!-- <td>{{ user.userPass }}</td> -->
          <td>{{ user.userProfile }}</td>
          <td>{{ user.joinDate }}</td>
          <td>
            <button type="button" class="btn btn warning" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="editUser(user)">Edit</button>
          <button type="button" class="btn btn danger" @click="deleteUser(index)">Delete</button>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">ID</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">firstName</label>
                      <input type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label" placeholder="0834597356"></label>
                      <input type="text" class="form-control" id="cellphoneNumber">
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="table-products">
      <table class="table">
<thead>
  <tr>
    <th scope="col">Product ID</th>
    <th scope="col">Product Name</th>
    <th scope="col">Product Description</th>
    <th scope="col">Category</th>
    <th scope="col">Price</th>
    <th scope="col">Product Quantity</th>
    <th scope="col">Product Image</th>
  </tr>
</thead>
<tbody>
  <tr v-for="(product, index) in products" :key="index">
    <th scope="row">{{ product.id  }}</th>
    <td>{{ product.prodName }}</td>
    <td>{{ product.prodDescription}}</td>
    <td>{{ product.category }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.prodQuantity }}</td>
    <td>{{ product.imgURL }}</td>
  </tr>
</tbody>
</table>
  </div>
</template>
<script>
export default {
    name: 'AdminView',
    components: {
    },
    computed: {
        users() {
            return this.$store.state.users;
        },
    },
    mounted() {
        this.$store.dispatch("getUsers")
    },
}
</script>
<style scoped>
table{
/*  display: inline;*/
border: 1px;
text-align: center;
position: absolute;
padding: 0px;
font-size: 15px;
}

.table-products{
  margin-top: 400px;
}

h6{
margin-bottom: 30px;
margin-top: 10px;
color: #14134A;
}
.btn{
font-size: 15px;
}
.products-view{
margin-top: 170px;
}
</style>