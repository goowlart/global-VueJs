<template>
  <div>
   <h1>Safe zone</h1>
    <router-link to="login">
      <button @click="logout()">Logout</button>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  methods: {
  logout() {
    localStorage.clear();
    //this.$auth.login(this.user, "home");
  }
}
}


</script>
