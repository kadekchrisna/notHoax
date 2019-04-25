import AddPost from './AddPostScreen';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoggedIn: state.account.isLoggedIn,

})

export default connect(mapStateToProps, null)(AddPost)