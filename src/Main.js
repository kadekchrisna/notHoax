
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';

import rootStack from './routes';
import DrawerNavigator from "./routes/DrawerNavigator";
const AppIndex = createAppContainer(rootStack);

export default class Main extends Component {
    render() {
        return (
            <AppIndex {...this.props}/>
        );
    }
}
