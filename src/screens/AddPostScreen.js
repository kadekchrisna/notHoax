import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Textarea, CardItem, Item, Input, Content, Container, Card, Button } from 'native-base';

import { BASE_IMAGE_URL } from 'react-native-dotenv';


const options = {
    title: 'Select Post Picture',
    cancelButtonTitle: 'Cancel',
    takePhotoButtonTitle: 'Take photo from camera',
    chooseFromLibraryButtonTitle: 'Get photo from galery',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export default class AddPost extends Component {
    static navigationOptions = {
        headerTitle: 'Add Post '
    };
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null,
            image: `${BASE_IMAGE_URL}image.png`,
            title: '',
            descriptions: '',
        };
    }
    componentDidMount() {
        this.props.navigation.addListener('didFocus', () => {
            if (this.props.isLoggedIn == false) {
                this.props.navigation.navigate('Auth')
            }
        })

    }

    toCategories = () => {
        this.props.navigation.navigate('AddPostCategory', {
            title: this.state.title, 
            avatarSource: this.state.avatarSource, 
            descriptions: this.state.descriptions
        });
    }

    componentWillMount() {

    }


    selectImage = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                // console.log(response)
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                    image: response.uri
                });
            }
        });
    }



    render() {

        return (
            <Container>
                <Content>
                    <View style={styles.container}>
                        <Item style={{ marginVertical: 8, }}>
                            <Input placeholder="Post title" onChangeText={(text) => this.setState({ title: text })} value={this.state.title} />
                        </Item>

                        <Textarea style={{ marginVertical: 8, }} rowSpan={5} bordered placeholder="Descriptions" onChangeText={(text) => this.setState({ descriptions: text })} value={this.state.descriptions} />
                        <Card>
                            <CardItem cardBody button onPress={() => this.selectImage()}>
                                <Image source={{ uri: this.state.image }} style={{ height: 200, width: '100%', resizeMode: 'contain' }} />
                            </CardItem>
                        </Card>
                        <Button block style={{ backgroundColor: 'black', marginVertical: 8, }} onPress={() => this.toCategories()}>
                            <Text style={{ color: 'white' }}>Next</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 8,
    }
})
