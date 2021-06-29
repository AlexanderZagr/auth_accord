import axios from 'axios';
import AuthService from './AuthService';


//const USER_API_BASE_URL = 'http://localhost:8080/auth-accord-idoc/users';
const USER_API_BASE_URL = '/users';


class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL, AuthService.getAuthHeader());
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.userId, user);
    }

}

export default new ApiService();

