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
</template>

<script>

export default {
    name: 'UserTable',
    components: {
    },
    computed: {
        users() {
            return this.$store.state.users;
        },
        mounted() {
        this.$store.dispatch("getUsers")
    },
}
}

</script>

<style>
table{
    /*  display: inline;*/
    border: 1px;
    text-align: center;
    position: absolute;
    padding: 0px;
    font-size: 15px;
}

img{
    width: 5rem;
}
  
h6{
  margin-bottom: 30px;
  margin-top: 10px;
  color: #14134A;
}

</style>