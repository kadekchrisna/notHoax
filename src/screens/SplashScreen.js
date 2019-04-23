import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Button, Container, Content } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class Splash extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount(){
        setInterval(() => {
            this.props.navigation.navigate('Home')
          }, 1000);
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                    <StatusBar backgroundColor="black" barStyle="light-content" />
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <FontAwesome name="exclamation" size={72} color='white' />
                        <FontAwesome name="question" size={72} color='white' />
                    </View>
                </View>
            </View >
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'black'
    }
});