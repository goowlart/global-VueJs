<template>
    <div class="container">
        <h2>Sign In</h2>
        <div class="form-group">
            <input v-model="user.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
            
        </div>
        <div class="form-group">
            <input v-model="user.password" type="Password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div v-for="(error, index) in errors" :key="index" class="alert alert-danger" role="alert">{{error}}</div>
        <button @click="localVerificationError()" type="button" class="btn btn-success btn-block">Login</button>
        <a>Forgot your or password?</a>
        <router-link to="register">
            <a>Don't have an compte? Create one now.</a>
        </router-link>
    </div>
</template>

<script>
import { truncate } from 'fs';

export default {
    data() {
        return {
            user: {
                email: '',
                password: null
            },
            errors: []
        };
    },


    methods: {
        localVerificationError() {
            let test = false
            this.errors = []

            this.user.password === null ? this.errors.push("Required field") : test = true
            if (/.+@.+/.test(this.user.email) === false) {
                this.errors.push("Please enter a valid email address")
            } else {
                test = true
            }

            this.cleanErros()
            console.log(test)

            return test !== false ? this.authLogin() : null
        },

        apiVerificationError() {
            this.errors.push(this.$store.state.error.data.error)
            this.cleanErros()
            this.$store.commit('CLEAR_ERROR')
        },

        authLogin() {

            this.$auth.login(this.user, "home");

            // resolver  

            this.apiVerificationError()

        },
        cleanErros() {
            setTimeout(() => this.errors = [], 7000);
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
    color: #2c3e50;
    text-align: center;
    padding-bottom: 20px;
}

.container button {
    margin-top: 20px;
    margin-bottom: 33px;
}

.container a {
    display: inline-block;
    margin-top: 8px;
    color: #42b983;
    cursor: pointer;
}
</style>

