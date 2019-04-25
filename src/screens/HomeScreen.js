
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, Modal, FlatList, Alert, StatusBar } from 'react-native';
import { Root, Container, Header, Text, View, ActionSheet, Content, Left, Right, Card, CardItem, Body, Button, Thumbnail, Icon } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BASE_IMAGE_URL } from 'react-native-dotenv';

import { getTimeAgo } from '../components/GetTimeAgo'
import { requestCameraPermission } from '../components/Permissions'

const BUTTONS = ["Option", "Cancel"];
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

        this.props.navigation.addListener('didFocus', () => {
            this.props.getAllPosts()
        })
        await requestCameraPermission()
    }

    toggleModal = () => {
        ActionSheet.show(
            {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Options"
            },
            buttonIndex => {
                if (BUTTONS[buttonIndex] == 'Option') {
                    alert('here')
                }
            }
        )
    }

    render() {
        return (

            <Container>
                <Header style={styles.header} >
                    <Left>
                        <TouchableOpacity style={styles.iconCart} onPress={() => this.props.navigation.openDrawer()}>
                            <FontAwesome name="bars" size={24} color='black' />
                        </TouchableOpacity>
                    </Left>
                    <Right>
                        <TouchableOpacity style={styles.iconCart} onPress={() => this.props.navigation.navigate('AddPost')}>
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

                        <FlatList
                            data={this.props.posts}
                            renderItem={({ item }) =>
                                (
                                    <Card>
                                        <CardItem bordered >
                                            <Left>
                                                <Thumbnail square small source={{ uri: `${BASE_IMAGE_URL}categories/${item.cover}` }} />
                                                <Body>
                                                    <Text note>{item.name}</Text>
                                                </Body>
                                            </Left>
                                            <Right>
                                                <TouchableOpacity>
                                                    <FontAwesome name="ellipsis-v" size={18} color='black' onPress={() => this.toggleModal()} />
                                                </TouchableOpacity>
                                            </Right>
                                        </CardItem>
                                        <CardItem header button onPress={() => this.toggleModal()}>
                                            <Thumbnail source={{ uri: `${BASE_IMAGE_URL}profile/${item.pp}` }} />
                                            <Left>
                                                <Body>
                                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
                                                    <Text note>{item.username}   {String(getTimeAgo(item.created_at))}</Text> 
                                                </Body>
                                            </Left>
                                        </CardItem>
                                        <CardItem cardBody button onPress={() => this.props.navigation.navigate('Detail', {
                                            id: item.id
                                        })}>
                                            <Image source={{ uri: `${BASE_IMAGE_URL}posts/${item.image}` }} style={{ height: 200, width: null, flex: 1 }} />
                                        </CardItem>
                                        <CardItem>
                                            <View style={styles.containerIcon}>

                                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }} >
                                                    <MaterialCommunityIcons name="thumb-up" size={24} color='black' />
                                                    <Text> {item.up} </Text>
                                                </View>
                                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }} >
                                                    <MaterialCommunityIcons name="thumb-down" size={24} color='black' />
                                                    <Text> {item.down} </Text>
                                                </View>
                                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }} >
                                                    <MaterialCommunityIcons name="comment" size={24} color='black' />
                                                    <Text> {item.comments} </Text>
                                                </View>
                                            </View>
                                        </CardItem>
                                    </Card>

                                )
                            }
                            keyExtractor={item => item.id.toString()}
                        />

                    </View>
                </Content>
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
