
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, Modal, TouchableHighlight, Alert, StatusBar } from 'react-native';
import { Root, Container, Header, Text, View, ActionSheet, Content, Left, Right, Card, CardItem, Body, Button, Thumbnail, Icon } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import { requestCameraPermission } from '../components/Permissions'

const BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

export default class Home extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            clicked: 0
        }
    }

    async componentDidMount() {
        await requestCameraPermission()
    }

    toggleModal = () => {
        ActionSheet.show(
            {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Testing ActionSheet"
            },
            buttonIndex => {
                if (BUTTONS[buttonIndex] == 'Option 0') {
                    alert('here')
                }
            }
        )
    }

    render() {
        return (

            <Container>
                <Root>
                    <Header style={styles.header} >
                        <Left>
                            <TouchableOpacity style={styles.iconCart} onPress={() => this.props.navigation.openDrawer()}>
                                <FontAwesome name="bars" size={24} color='black' />
                            </TouchableOpacity>
                        </Left>
                        <Right>
                            <TouchableOpacity style={styles.iconCart} onPress={() => alert('add')}>
                                <FontAwesome name="plus" size={24} color='black' />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconCart} onPress={() => alert('search')}>
                                <FontAwesome name="search" size={24} color='black' />
                            </TouchableOpacity>
                        </Right>
                    </Header>
                    <Content>
                        <StatusBar backgroundColor="white" barStyle="dark-content" />
                        <View style={styles.container}>
                            <Card>
                                <CardItem bordered style={{}}>
                                    <Left>
                                        <Thumbnail square small source={{ uri: 'https://freeiconshop.com/wp-content/uploads/edd/earth-outline-filled.png' }} />
                                        <Body>
                                            <Text note>Earth-chan {this.state.clicked}</Text>
                                        </Body>
                                    </Left>
                                    <Right>
                                        <TouchableOpacity>
                                            <FontAwesome name="ellipsis-v" size={18} color='black' onPress={() => this.toggleModal()} />
                                        </TouchableOpacity>
                                    </Right>
                                </CardItem>
                                <CardItem header button onPress={() => this.toggleModal()}>
                                    <Thumbnail source={{ uri: 'http://chittagongit.com//images/avatar-icon/avatar-icon-4.jpg' }} />
                                    <Left>
                                        <Body>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Earth is Round Like Saturn!!</Text>
                                            <Text note>GeekyAnts</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody button onPress={() => this.props.navigation.navigate('Detail')}>
                                    <Image source={{ uri: 'https://www.insertcart.com/wp-content/uploads/2018/05/thumbnail.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
                                </CardItem>
                                <CardItem>
                                    <View style={styles.containerIcon}>

                                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }} onPress={() => this.props.navigation.navigate('Join')}>
                                            <MaterialCommunityIcons name="thumb-up" size={24} color='black' />
                                            <Text> 12 </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                            <MaterialCommunityIcons name="thumb-down" size={24} color='black' />
                                            <Text> 12 </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                            <MaterialCommunityIcons name="comment" size={24} color='black' />
                                            <Text> 4 </Text>
                                        </TouchableOpacity>
                                    </View>
                                </CardItem>
                            </Card>
                        </View>
                    </Content>
                </Root>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 4,
    },
    containerIcon: {

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 4,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    header: {
        backgroundColor: 'white'
    },
    iconCart: { padding: 12, },
});
