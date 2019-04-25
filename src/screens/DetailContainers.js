import { getPost, postComment, upvote, downvote } from '../actions';
import Detail from './DetailScreen';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoading: state.post.isLoading,
    details: state.post.details,
    comments: state.post.comments,
    opinions: state.post.opinions,

})

const mapDispatchToProps = dispatch => ({
    getPost: (id) => dispatch(getPost(id)),
    postComment: (comment, post_id, token) => dispatch(postComment(comment, post_id, token)),
    upvote: (id, token) => dispatch(upvote(id, token)),
    downvote: (id, token) => dispatch(downvote(id, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)