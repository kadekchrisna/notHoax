
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, Modal, FlatList, Alert, StatusBar } from 'react-native';
import { Root, Container, Header, View, Text, ActionSheet, Content, Left, Right, Card, CardItem, Body, Input, Thumbnail, Item, Tabs, Tab, ScrollableTab } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { WaveIndicator } from 'react-native-indicators';
import { BASE_IMAGE_URL } from 'react-native-dotenv';

import { getTimeAgo } from '../components/GetTimeAgo'
import { getMyValue } from '../storages';


export default class Detail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comment: ''
        }
    }

    componentDidMount() {
        this.props.navigation.addListener('didFocus', () => {
            const id = this.props.navigation.getParam('id', '');
            this.props.getPost(id);
        })
    }

    postComment = async (id) => {
        const token = await getMyValue('token')
        console.log(token);

        if (token) {
            this.props.postComment(this.state.comment, id, token)
            this.setState({ comment: '' })


        }
    }

    toUpvote = async (id) => {
        const token = await getMyValue('token')
        console.log(token);
        if (token) {
            this.props.upvote(id, token)
        }
    }

    toDownvote = async (id) => {
        const token = await getMyValue('token')
        console.log(token);
        if (token) {
            this.props.downvote(id, token)
        }

    }

    render() {
        if (this.props.isLoading) return (<WaveIndicator color="black" size={60} />)

        const { id, created_at, title, description, image, comments, name, cover, username, pp } = this.props.details
        const { up, down } = this.props.opinions

        return (

            <Container>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginBottom: 102,
                }}>
                    <Content>
                        <StatusBar backgroundColor="white" barStyle="dark-content" />
                        <View style={styles.container}>
                            <Card>
                                <CardItem bordered style={{}}>
                                    <Left>
                                        <Thumbnail square small source={{ uri: `${BASE_IMAGE_URL}categories/${cover}` }} />
                                        <Body>
                                            <Text note>{name}</Text>
                                        </Body>
                                    </Left>
                                    <Right>
                                        <TouchableOpacity>
                                            <FontAwesome name="ellipsis-v" size={18} color='black' onPress={() => alert('here')} />
                                        </TouchableOpacity>
                                    </Right>
                                </CardItem>
                                <CardItem header button onPress={() => alert('here')}>
                                    <Thumbnail source={{ uri: `${BASE_IMAGE_URL}profile/${pp}` }} />
                                    <Left>
                                        <Body>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
                                            <Text note>{username}   {String(getTimeAgo(created_at))}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody button onPress={() => alert('here')}>
                                    <Image source={{ uri: `${BASE_IMAGE_URL}posts/${image}` }} style={{ height: 200, width: null, flex: 1 }} />
                                </CardItem>
                                <CardItem>
                                    <Tabs renderTabBar={() => <ScrollableTab tabsContainerStyle={{ alignItems: 'stretch', justifyContent: 'flex-start', backgroundColor: 'white' }} underlineStyle={{ backgroundColor: 'black' }} />} >
                                        <Tab heading="Description" tabStyle={{ backgroundColor: 'white' }} activeTabStyle={{ backgroundColor: 'white' }} activeTextStyle={{ color: 'black' }} textStyle={{ color: '#A5A5A5' }} >
                                            <Text textAlign='justify'>{description}</Text>
                                        </Tab>
                                    </Tabs>
                                </CardItem>
                                <CardItem>
                                    <View style={styles.containerIcon}>

                                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }} onPress={() => this.toUpvote(id)}>
                                            <MaterialCommunityIcons name="thumb-up-outline" size={24} color='black' />
                                            <Text> {String(up)} </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }} onPress={() => this.toDownvote(id) }>
                                            <MaterialCommunityIcons name="thumb-down-outline" size={24} color='black' />
                                            <Text> {String(down)} </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                            <MaterialCommunityIcons name="comment" size={24} color='black' />
                                            <Text> {comments} </Text>
                                        </TouchableOpacity>
                                    </View>
                                </CardItem>
                            </Card>
                        </View>
                        <View style={styles.container}>
                            <Card>
                                <FlatList
                                    data={this.props.comments}
                                    renderItem={({ item }) =>
                                        (
                                            <CardItem bordered style={{}}>
                                                <Left style={{ flex: 1, alignItems: 'stretch', justifyContent: 'flex-start' }}>
                                                    <Thumbnail square small source={{ uri: `${BASE_IMAGE_URL}profile/${item.pp}` }} />
                                                    <Body style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                            <Text style={{ fontWeight: 'bold' }}>{item.username}</Text>
                                                            <Text note style={{ flex: 1, paddingHorizontal: 10, fontSize: 13 }}> {String(getTimeAgo(item.created_at))} </Text>
                                                        </View>
                                                        <Text style={{ flex: 1 }}>{item.comment}</Text>
                                                    </Body>
                                                </Left>
                                            </CardItem>
                                        )
                                    }
                                    keyExtractor={item => String(item.id)}
                                />

                            </Card>
                        </View>

                    </Content>
                </View>

                <View style={styles.footer}>
                    <View style={{ flex: 1, flexDirection: 'column', }}>
                        <View style={styles.buttonAdd}>
                            <Item regular>
                                <Input placeholder='Write comment...' onChangeText={(text) => this.setState({ comment: text })} value={this.state.comment} />
                            </Item>
                        </View>
                        <View style={styles.buttonCheckOut}>
                            <TouchableOpacity style={styles.buttonContainer} onPress={() => this.postComment(id)} >
                                <Text style={styles.buttonText}>Post</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
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
        backgroundColor: '#F5FCFF',
    },
    containerIcon: {

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 4,
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        borderTopWidth: 0.2,
        borderTopColor: 'black',
        alignItems: 'stretch',
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginTop: 4,
        marginBottom: 4
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 10,
        borderRadius: 6,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18
    },
    buttonAdd: {
        flex: 2,
        paddingBottom: 2,
        paddingLeft: 4

    },
    buttonCheckOut: {
        flex: 1,
        borderRadius: 30,
    },
});
