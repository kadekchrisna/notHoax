import { createStackNavigator } from 'react-navigation';

import Detail from '../screens/DetailScreen'
import Home from '../screens/HomeScreen'
import Drawer from './DrawerNavigator'
import Join from '../screens/JoinScreen'
import Login from '../screens/LoginScreen'
import Register from '../screens/RegisterScreen'
import Splash from '../screens/SplashScreen'

const rootStack = createStackNavigator(
    {
        Home: {
            screen: Drawer,
            navigationOptions: {
                header: null
            }
        },
        Splash: {
            screen: Splash,
            navigationOptions: {
                header: null
            }
        },
        Detail: {
            screen: Detail,
            navigationOptions: {
                title: 'Post'
            }
        },
        Join: {
            screen: Join,
            navigationOptions: {
                header: null
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                title: 'Welcome Back!'
            }
        },
        Register: {
            screen: Register,
            navigationOptions: {
                title: 'Join !Hoax'
            }
        },
    },
    {
        initialRouteName: 'Home'
    }
);
export default rootStack;
