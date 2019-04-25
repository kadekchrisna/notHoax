const initial = {
    posts: {},
    categories: {},
    isLoading: false,
}
export default (state = initial, action) => {
    switch (action.type) {
        case 'GET_ALL_CATEGORIES_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_ALL_CATEGORIES_FULFILLED':
        
            return {
                ...state,
                categories: action.payload.data.data,
                isLoading: false
            }

        default:
            return state;
    }
}
