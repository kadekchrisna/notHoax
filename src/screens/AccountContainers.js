import { clearUser, getUserData } from '../actions';
import Account from './AccountScreen';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoggedIn: state.account.isLoggedIn,
    user: state.account.user,
    token: state.account.access_token

})

const mapDispatchToProps = dispatch => ({
    clearUser: () => dispatch(clearUser()),
    getUserData: (token) => dispatch(getUserData(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Account)