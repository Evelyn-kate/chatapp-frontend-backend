import axios from "axios";

import { apiLogin, apiSignUp, BASE_URL } from '../api/index';

class AuthService {
    login(username, password) {
        return apiLogin(username, password)
            .then(response => {
                console.log(response);
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return apiSignUp(username, email, password);
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();