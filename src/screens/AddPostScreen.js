import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { } from 'native-base';

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
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null
        };
    }
    componentDidMount() {

    }

    componentWillMount(){
        this.props.navigation.addListener('didFocus', () => {
            if (this.props.isLoggedIn == false) {
                this.props.navigation.navigate('Auth')
            }
        })
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
                console.log(response)
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: response.uri,
                });
            }
        });
    }



    render() {

        return (
            <View>
                <Text> Add Post </Text>
                {
                    this.state.avatarSource && <Image source={{ uri: this.state.avatarSource }} style={{ width: '80%', height: 200, resizeMode: 'contain' }} />
                }

                <Button title='Select Image' onPress={() => this.selectImage()} />
            </View>
        );
    }
}
