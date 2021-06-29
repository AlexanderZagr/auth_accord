import axios from 'axios';

const USER_API_BASE_URL = '/token/';

class AuthService {

    login(credentials){
      
        const httpClient = axios.create();
        return httpClient.post(USER_API_BASE_URL + "generate-token", credentials);
      
       // return axios.post(USER_API_BASE_URL + "generate-token", credentials);
    }

    getUserInfo(){
        return JSON.parse(localStorage.getItem("userInfo"));
    }

    getAuthHeader() {
        return {headers: {Authorization: 'Bearer ' + this.getUserInfo().token }};
    }

    logOut() {
        localStorage.removeItem("userInfo");
        return axios.post(USER_API_BASE_URL + 'logout', {}, this.getAuthHeader());
    }
}

export default new AuthService();