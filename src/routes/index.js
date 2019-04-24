import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Detail from '../screens/DetailScreen'
import Home from '../screens/HomeScreen'
import Drawer from './DrawerNavigator'
import Join from '../screens/JoinScreen'
import Login from '../screens/LoginContainers'
import Register from '../screens/RegisterContainers'
import Splash from '../screens/SplashContainers'
import AddPost from '../screens/AddPostContainers'
import Account from '../screens/AccountContainers'

const authStack = createStackNavigator(
    {
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
        initialRouteName: 'Join'
    }
);
const appStack = createStackNavigator(
    {
        Home: {
            screen: Drawer,
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
        AddPost: {
            screen: AddPost,
            navigationOptions: {
                title: 'Add Post'
            }
        },
        Account: {
            screen: Account,
            navigationOptions: {
                title: 'Me'
            }
        }
    },
    {
        initialRouteName: 'Home'
    }
);

const rootStack = createSwitchNavigator(
    {
        Splash: {
            screen: Splash,
            navigationOptions: {
                header: null
            }
        },
        App: {
            screen: appStack,
        },
        Auth: {
            screen: authStack,
        },
    },
    {
        initialRouteName: 'Splash'
    }
);





export default rootStack;
