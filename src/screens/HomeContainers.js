import { getAllPosts } from '../actions';
import Home from './HomeScreen';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoading: state.post.isLoading,
    posts: state.post.posts

})

const mapDispatchToProps = dispatch => ({
    getAllPosts: () => dispatch(getAllPosts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)