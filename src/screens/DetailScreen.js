
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, Modal, TouchableHighlight, Alert, StatusBar } from 'react-native';
import { Root, Container, Header, Text, View, ActionSheet, Content, Left, Right, Card, CardItem, Body, Input, Thumbnail, Item, Tabs, Tab, ScrollableTab } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Detail extends Component {
    render() {
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
                                        <Thumbnail square small source={{ uri: 'https://freeiconshop.com/wp-content/uploads/edd/earth-outline-filled.png' }} />
                                        <Body>
                                            <Text note>Earth-chan</Text>
                                        </Body>
                                    </Left>
                                    <Right>
                                        <TouchableOpacity>
                                            <FontAwesome name="ellipsis-v" size={18} color='black' onPress={() => alert('here')} />
                                        </TouchableOpacity>
                                    </Right>
                                </CardItem>
                                <CardItem header button onPress={() => alert('here')}>
                                    <Thumbnail source={{ uri: 'http://chittagongit.com//images/avatar-icon/avatar-icon-4.jpg' }} />
                                    <Left>
                                        <Body>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Earth is Round Like Saturn!!</Text>
                                            <Text note>GeekyAnts</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody button onPress={() => alert('here')}>
                                    <Image source={{ uri: 'https://www.insertcart.com/wp-content/uploads/2018/05/thumbnail.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
                                </CardItem>
                                <CardItem>
                                    <Tabs renderTabBar={() => <ScrollableTab tabsContainerStyle={{ alignItems: 'stretch', justifyContent: 'flex-start', backgroundColor: 'white' }} underlineStyle={{ backgroundColor: 'black' }} />} >
                                        <Tab heading="Tab1" tabStyle={{ backgroundColor: 'white' }} activeTabStyle={{ backgroundColor: 'white' }} activeTextStyle={{ color: 'black' }} textStyle={{ color: '#A5A5A5' }} >
                                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet sem eget posuere ultrices. Proin porttitor nisi non ligula egestas finibus. Curabitur dapibus non est et maximus. Proin sit amet maximus purus, placerat blandit mi. Sed iaculis nisl tellus, vel interdum magna ornare quis. Donec ac magna vehicula, vestibulum ex ut, lacinia ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris non augue diam.

    Suspendisse neque orci, laoreet eu aliquet quis, mattis sed est. Suspendisse metus felis, malesuada vel augue ac, scelerisque congue dui. In mollis, metus vitae euismod tempus, leo mauris porttitor tortor, ac tempor felis purus sed neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis mi mi. In bibendum erat dapibus, dictum risus id, posuere nibh. Integer condimentum velit est, ut accumsan quam iaculis sed. Sed placerat sit amet eros sed placerat. Phasellus sit amet mauris pellentesque velit tempor egestas vitae quis nibh. Aliquam erat volutpat. In mattis diam ac nisi elementum, et fringilla arcu sagittis.

    Aenean ornare quis ipsum viverra tristique. Vivamus scelerisque augue ornare, pellentesque sem in, consequat leo. Praesent vehicula in quam in molestie. Fusce tempus libero sit amet nisi dapibus pretium. Curabitur suscipit, nulla eu faucibus dictum, ante lectus molestie lacus, id sollicitudin arcu turpis sit amet eros. Duis ut hendrerit ex, at bibendum purus. Duis gravida magna orci, ut aliquet neque accumsan at. Suspendisse mollis, diam eu elementum bibendum, tortor dolor vulputate massa, et ultricies erat orci at odio. Aliquam a congue lectus, at porta quam. Vestibulum ornare tortor sed fringilla suscipit. Integer quis nibh est. Nullam gravida accumsan velit a aliquam. Donec convallis sapien vitae laoreet luctus. Pellentesque at nisi ut est blandit posuere.

    Sed luctus, lacus sit amet gravida porta, sem tortor elementum orci, vitae varius orci enim non turpis. Suspendisse euismod nec arcu ut gravida. Donec tristique lectus eleifend, tempus velit eget, condimentum metus. Pellentesque sodales efficitur arcu, vitae condimentum massa. In hac habitasse platea dictumst. Sed cursus, dui faucibus luctus pulvinar, est risus egestas enim, vel tempus eros ex a dolor. Sed viverra massa risus, in iaculis eros luctus non. Integer ultrices purus et fringilla cursus. Aenean vulputate venenatis rutrum.

Nunc ullamcorper justo leo, vel dictum urna imperdiet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ut tristique nisi. Suspendisse malesuada orci urna, ac convallis lectus hendrerit a. In elementum ullamcorper tortor, ac iaculis ipsum pellentesque non. Vestibulum arcu libero, congue id urna in, facilisis sodales purus. Mauris sem purus, sodales ac pharetra eu, ultrices id dui. Nullam fermentum ultricies elit ac fringilla. Nullam ultricies diam eget euismod tristique. Aliquam fringilla dolor sit amet feugiat imperdiet. Aliquam elementum purus arcu, a volutpat urna condimentum eget. Quisque vestibulum volutpat mi, eget pellentesque tortor fringilla eget. In et urna eget libero posuere suscipit nec sed felis. </Text>
                                        </Tab>
                                        <Tab heading="Tab2" tabStyle={{ backgroundColor: 'white' }} activeTabStyle={{ backgroundColor: 'white' }} activeTextStyle={{ color: 'black' }} textStyle={{ color: '#A5A5A5' }} >
                                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet sem eget posuere ultrices. Proin porttitor nisi non ligula egestas finibus. Curabitur dapibus non est et maximus. Proin sit amet maximus purus, placerat blandit mi. Sed iaculis nisl tellus, vel interdum magna ornare quis. Donec ac magna vehicula, vestibulum ex ut, lacinia ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris non augue diam.

    Suspendisse neque orci, laoreet eu aliquet quis, mattis sed est. Suspendisse metus felis, malesuada vel augue ac, scelerisque congue dui. In mollis, metus vitae euismod tempus, leo mauris porttitor tortor, ac tempor felis purus sed neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis mi mi. In bibendum erat dapibus, dictum risus id, posuere nibh. Integer condimentum velit est, ut accumsan quam iaculis sed. Sed placerat sit amet eros sed placerat. Phasellus sit amet mauris pellentesque velit tempor egestas vitae quis nibh. Aliquam erat volutpat. In mattis diam ac nisi elementum, et fringilla arcu sagittis.

    Aenean ornare quis ipsum viverra tristique. Vivamus scelerisque augue ornare, pellentesque sem in, consequat leo. Praesent vehicula in quam in molestie. Fusce tempus libero sit amet nisi dapibus pretium. Curabitur suscipit, nulla eu faucibus dictum, ante lectus molestie lacus, id sollicitudin arcu turpis sit amet eros. Duis ut hendrerit ex, at bibendum purus. Duis gravida magna orci, ut aliquet neque accumsan at. Suspendisse mollis, diam eu elementum bibendum, tortor dolor vulputate massa, et ultricies erat orci at odio. Aliquam a congue lectus, at porta quam. Vestibulum ornare tortor sed fringilla suscipit. Integer quis nibh est. Nullam gravida accumsan velit a aliquam. Donec convallis sapien vitae laoreet luctus. Pellentesque at nisi ut est blandit posuere.

    Sed luctus, lacus sit amet gravida porta, sem tortor elementum orci, vitae varius orci enim non turpis. Suspendisse euismod nec arcu ut gravida. Donec tristique lectus eleifend, tempus velit eget, condimentum metus. Pellentesque sodales efficitur arcu, vitae condimentum massa. In hac habitasse platea dictumst. Sed cursus, dui faucibus luctus pulvinar, est risus egestas enim, vel tempus eros ex a dolor. Sed viverra massa risus, in iaculis eros luctus non. Integer ultrices purus et fringilla cursus. Aenean vulputate venenatis rutrum.

Nunc ullamcorper justo leo, vel dictum urna imperdiet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ut tristique nisi. Suspendisse malesuada orci urna, ac convallis lectus hendrerit a. In elementum ullamcorper tortor, ac iaculis ipsum pellentesque non. Vestibulum arcu libero, congue id urna in, facilisis sodales purus. Mauris sem purus, sodales ac pharetra eu, ultrices id dui. Nullam fermentum ultricies elit ac fringilla. Nullam ultricies diam eget euismod tristique. Aliquam fringilla dolor sit amet feugiat imperdiet. Aliquam elementum purus arcu, a volutpat urna condimentum eget. Quisque vestibulum volutpat mi, eget pellentesque tortor fringilla eget. In et urna eget libero posuere suscipit nec sed felis.</Text>
                                        </Tab>
                                    </Tabs>
                                </CardItem>
                                <CardItem>
                                    <View style={styles.containerIcon}>

                                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                            <FontAwesome name="thumbs-o-up" size={24} color='black' />
                                            <Text> 12 </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                            <FontAwesome name="thumbs-o-down" size={24} color='black' />
                                            <Text> 12 </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                            <FontAwesome name="commenting-o" size={24} color='black' />
                                            <Text> 4 </Text>
                                        </TouchableOpacity>
                                    </View>
                                </CardItem>
                            </Card>
                        </View>
                        <View style={styles.container}>
                            <Card>
                                <CardItem bordered style={{}}>
                                    <Left style={{ flex: 1, alignItems: 'stretch', justifyContent: 'flex-start' }}>
                                        <Thumbnail square small source={{ uri: 'https://freeiconshop.com/wp-content/uploads/edd/earth-outline-filled.png' }} />
                                        <Body style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontWeight: 'bold' }}>Earth-chan</Text>
                                                <Text> 4 min ago </Text>
                                            </View>
                                            <Text style={{ flex: 1, }}>Yea right</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem bordered style={{}}>
                                    <Left style={{ flex: 1, alignItems: 'stretch', justifyContent: 'flex-start' }}>
                                        <Thumbnail square small source={{ uri: 'https://freeiconshop.com/wp-content/uploads/edd/earth-outline-filled.png' }} />
                                        <Body style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontWeight: 'bold' }}>Earth-chan lovers</Text>
                                                <Text> 4 min ago </Text>
                                            </View>
                                            <Text style={{ flex: 1, }}>I told u so</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem bordered style={{}}>
                                    <Left style={{ flex: 1, alignItems: 'stretch', justifyContent: 'flex-start' }}>
                                        <Thumbnail square small source={{ uri: 'https://freeiconshop.com/wp-content/uploads/edd/earth-outline-filled.png' }} />
                                        <Body style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontWeight: 'bold' }}>Earth-chan lovers</Text>
                                                <Text> 4 min ago </Text>
                                            </View>
                                            <Text style={{ flex: 1, }}>I told u so</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem bordered style={{}}>
                                    <Left style={{ flex: 1, alignItems: 'stretch', justifyContent: 'flex-start' }}>
                                        <Thumbnail square small source={{ uri: 'https://freeiconshop.com/wp-content/uploads/edd/earth-outline-filled.png' }} />
                                        <Body style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontWeight: 'bold' }}>Earth-chan lovers</Text>
                                                <Text> 4 min ago </Text>
                                            </View>
                                            <Text style={{ flex: 1, }}>I told u so</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem bordered style={{}}>
                                    <Left style={{ flex: 1, alignItems: 'stretch', justifyContent: 'flex-start' }}>
                                        <Thumbnail square small source={{ uri: 'https://freeiconshop.com/wp-content/uploads/edd/earth-outline-filled.png' }} />
                                        <Body style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontWeight: 'bold' }}>Earth-chan lovers</Text>
                                                <Text> 4 min ago </Text>
                                            </View>
                                            <Text style={{ flex: 1, }}>I told u so</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </View>

                    </Content>
                </View>

                <View style={styles.footer}>
                    <View style={{ flex: 1, flexDirection: 'column', }}>
                        <View style={styles.buttonAdd}>
                            <Item regular>
                                <Input placeholder='Write comment' />
                            </Item>
                        </View>
                        <View style={styles.buttonCheckOut}>
                            <TouchableOpacity style={styles.buttonContainer} >
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
