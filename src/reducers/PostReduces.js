const initial = {
    user: {},
    posts: {},
    details: {},
    comments: {},
    opinions: {},
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
                isLoading: false
            }
        case 'GET_ALL_POSTS_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_ALL_POSTS_FULFILLED':
            return {
                ...state,
                posts: action.payload.data.data,
                isLoading: false
            }
        case 'GET_POST_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_POST_FULFILLED':
            return {
                ...state,
                details: action.payload.data.post,
                comments: action.payload.data.comment,
                opinions: action.payload.data.opinion,
                isLoading: false
            }
        case 'ADD_COMMENT_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'ADD_COMMENT_FULFILLED':

            state.comments.push(action.payload.data.data)
            return {
                ...state,
                isLoading: false
            }
        case 'UPVOTE_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'UPVOTE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                opinions: action.payload.data.opinion,
            }
        case 'DOWNVOTE_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'DOWNVOTE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                opinions: action.payload.data.opinion,
            }

        default:
            return state;
    }
}
