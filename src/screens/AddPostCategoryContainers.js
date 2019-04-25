import { getAllCategories, addPost } from '../actions';
import AddPostCategory from './AddPostCategoryScreen';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoading: state.category.isLoading,
    categories: state.category.categories

})

const mapDispatchToProps = dispatch => ({
    getAllCategories: () => dispatch(getAllCategories()),
    addPost: (title, image, descriptions, category, token) => dispatch(addPost(title, image, descriptions, category, token)),

})

export default connect(mapStateToProps, mapDispatchToProps)(AddPostCategory)