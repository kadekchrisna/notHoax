import React, { Component } from 'react';
import { Platform, Dimensions } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'

import Home from '../screens/HomeScreen';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH * 0.7,
}

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Home
        }
    },{
        DrawerConfig
    }
)

export default DrawerNavigator;