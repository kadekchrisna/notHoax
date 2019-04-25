import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet, FlatList } from 'react-native';
import { Body, Thumbnail, ListItem, Radio, Right, Left, Item, Input, Content, Container, Card, Toast } from 'native-base';
import { WaveIndicator } from 'react-native-indicators';
import { BASE_IMAGE_URL } from 'react-native-dotenv';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Spinner from 'react-native-loading-spinner-overlay';


import { getMyValue } from '../storages';


export default class AddPostCategory extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Post Category '
    });
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('didFocus', () => {
            this.props.getAllCategories()
        })

    }
    async savePost(title, avatasSource, descriptions, id) {
        const token = await getMyValue('token')
        console.log(token); ``
        if (token) {
            this.props.addPost(title, avatasSource, descriptions, id, token)
            if (this.props.isLoading == false) {
                Toast.show({
                    text: 'Post Saved',
                    duration: 1500
                })
                this.props.navigation.navigate('Home')

            }

        }

    }
    render() {
        if (this.props.isLoading === true) return (<WaveIndicator color="black" size={60} />)

        const { navigation } = this.props;
        const title = navigation.getParam('title', '');
        const descriptions = navigation.getParam('descriptions', '');
        const avatasSource = navigation.getParam('avatarSource', '');
        console.log(title + ' --- ' + descriptions + ' --- ' + JSON.stringify(avatasSource));

        return (
            <Container>
                <Content>
                    <Spinner
                        visible={this.props.isLoading}
                        textContent={'Saving...'}
                        textStyle={styles.spinnerTextStyle}
                        color={'black'}
                    />
                    <FlatList
                        data={this.props.categories}
                        renderItem={({ item }) =>
                            (
                                <ListItem button onPress={() => this.savePost(title, avatasSource, descriptions, item.id)}>
                                    <Left>
                                        <Thumbnail square small source={{ uri: `${BASE_IMAGE_URL}categories/${item.cover}` }} />
                                        <Body style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'flex-start', }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold', paddingHorizontal: 12, }}>{item.name}</Text>
                                        </Body>
                                    </Left>
                                    <Right>
                                        <FontAwesome name="angle-right" size={28} color='black' />
                                    </Right>
                                </ListItem>
                            )
                        }
                        keyExtractor={item => item.id.toString()}
                    />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

    spinnerTextStyle: {
        color: '#000',
    },
});

