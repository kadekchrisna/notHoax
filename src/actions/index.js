import axios from 'axios';
import { BASE_URL } from 'react-native-dotenv';


//Account
export const registerUser = (username, email, password) => {
    return {
        type: 'REGISTER_USER',
        payload: axios.post(`${BASE_URL}auth/register/`, {
            'username': username,
            'email': email,
            'password': password
        })
    }

}

export const loginUser = (email, password) => {
    return {
        type: 'LOGIN_USER',
        payload: axios.post(`${BASE_URL}auth/login/`, {
            'email': email,
            'password': password
        })
    }

}

export const getUserData = (token) => {
    return {
        type: 'GET_USER',
        payload: axios.get(`${BASE_URL}user/data`, {
            headers: {
                Authorization: token
            }
        })
    }

}
export const clearUser = () => {
    return {
        type: 'CLEAR_USER'
    }

}
