import axios from "axios";
import router from "./router"
import store from './store'
axios.defaults.baseURL = 'http://localhost:3001/api';

export default {

    login(params, redirect) {
        return axios.post('/auth', params)
            .then((response) => {
                router.push({
                    name: redirect
                })
                this._storeToken(response)
                this._storeUser(response)
            })
            .catch(error => {
                let { response } = error
                store.commit('UPDATE_ERROR', response)
            });
    },
    _storeToken(response) {
        let {token } = response.data

        let auth = {
            token,
            isLoggedIn: true
        }

        // auth.refreshToken = response.data.refresh_token
        store.commit('UPDATE_AUTH', auth)
    },
    _storeUser(response) {
        let { _id, email , name } = response.data.user

        let user = {
            _id,
            email,
            name,
        }
        store.commit('UPDATE_USER', user)
    },

}