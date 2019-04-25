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

//Category

export const getAllCategories = () => {
    return {
        type: 'GET_ALL_CATEGORIES',
        payload: axios.get(`${BASE_URL}category`)
    }

}

//Post
const dataPhoto = (photo, name) => {
    var data = new FormData();
    const ts = new Date().valueOf();
    // data.append('name', name);
    data.append('image', {
        ...photo,
        name: ts + ".jpg",
        type: "image/jpeg"
    });
    return data;
};


export const addPost = (title, image, descriptions, category, token) => {

    var data = new FormData();
    const ts = new Date().valueOf();
    data.append('title', title);
    data.append('description', descriptions);
    data.append('category_id', category);
    data.append('image', {
        ...image,
        name: ts + ".jpg",
        type: "image/jpeg"
    });
    console.log(data);
    return {
        type: 'ADD_POSTS',
        payload: axios.post(`${BASE_URL}post/`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: token
            }
        })
    }

}
export const getAllPosts = () => {
    return {
        type: 'GET_ALL_POSTS',
        payload: axios.get(`${BASE_URL}post`)
    }

}

export const getPost = (id) => {
    return {
        type: 'GET_POST',
        payload: axios.get(`${BASE_URL}post/${id}`)
    }

}

// Comments
export const postComment = (comment, post_id, token) => {
    return {
        type: 'ADD_COMMENT',
        payload: axios.post(`${BASE_URL}comment`, {
            'comment': comment,
            'post_id': post_id,
        }, {
                headers: {
                    Authorization: token
                }
            })
    }

}

// Opinion
export const upvote = (id, token) => {
    return {
        type: 'UPVOTE',
        payload: axios.post(`${BASE_URL}opinion/${id}`, {
            'opinion_up': 1,
            'opinion_down': 0,
        }, {
                headers: {
                    Authorization: token
                }
            })
    }

}

export const downvote = (id, token) => {
    return {
        type: 'DOWNVOTE',
        payload: axios.post(`${BASE_URL}opinion/${id}`, {
            'opinion_up': 0,
            'opinion_down': 1,
        }, {
                headers: {
                    Authorization: token
                }
            })
    }

}