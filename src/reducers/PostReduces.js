const initial = {
    user: {},
    access_token: {},
    isLoading: false,
}
export default (state = initial, action) => {
    switch (action.type) {
        case 'ADD_POSTS_PENDING':
            return {
                ...state,
                isLoading: true                
            }
        case 'ADD_POSTS_FULFILLED':
            return {
                ...state,
                access_token: action.payload.data.access_token,
                user: action.payload.data.user,
                isLoggedIn: true,
                isLoading: false
            }

    }
}
