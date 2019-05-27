<template>
  <div class="container">
    <h2>Create</h2>
    <input
      v-model="user.name"
      name="name"
      placeholder="You name (ex. Jhon Doe)"
      type="text "
      class="form-control"
    >
    <input
      v-model="user.email"
      name="username"
      placeholder="Your email"
      type="email"
      class="form-control"
    >
    <input
      v-model="user.password"
      name="password"
      placeholder="password"
      type="password"
      class="form-control"
    >
    <input
      v-model="password2"
      name="password"
      placeholder="Confirms password"
      type="password"
      class="form-control"
    >
    <button @click="verificationPass()" class="btn btn-success btn-block">Create</button>
    <router-link to="login">
      <a> Return to login screen</a>
    </router-link>
  
      <div
        v-for="(error, index) in errors"
        :key="index"
        class="alert alert-danger"
        role="alert"
      >{{error}}</div>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null
      },
      password2: null,
      errors: [],
      localData: null
    };
  },

  methods: {
     verificationPass() {
      this.messageError = null;

       /.+@.+/.test(this.user.email) ||  this.errors.push("The email is not valid")

      if (this.user.password !== this.password2) {
         this.user.password = null;
         this.password2 = null;
       
       return this.errors.push("Passwords do not match");

       
      }
      this.localData = this.$http.post("/register", this.user).then((response)=> {
      this.localData = response.data;
      this.$router.push({name: about})
      }).catch((error) => {
        
       console.log(error);
      });
    }
  }
};
</script>
<style scoped>
.container {
  padding-top: 150px;
  max-width: 400px;
}
.container h2 {
  text-align: center;
  padding-bottom: 20px;
}
.container button {
  margin-top: 30px;
}
.container input {
  margin-bottom: 10px;
}
.container a {
  display: inline-block;
  margin: 10px 0px 10px;
  color: #42b983;
  cursor: pointer;
}
</style>

