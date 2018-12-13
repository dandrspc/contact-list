import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Platform,
    ScrollView,
    Image,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { fetchUsers } from '@utils/api';
//import { ContacRow } from '@contacts/ContactRow'


class Contacts extends Component {
    state = {
        contacts: [],
    }

    componentDidMount() {
        this.getUsers()
    }

    componentWillMount() {

        if (Platform.OS == 'android') {
            this.startHeaderHeight = 55 + StatusBar.currentHeight
        }
    }

    getUsers = async () => {
        const results = await fetchUsers()
        this.setState({ contacts: results })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    height: this.startHeaderHeight, backgroundColor: 'white',
                    borderBottomWidth: 1, borderColor: '#dddddd',
                    alignItems: 'flex-end', justifyContent: "flex-end", flexDirection: 'row',
                }}>
                    <Icon color='#7C7D81' name='ios-search' size={25}
                        style={{ paddingRight: 20, paddingBottom: 10 }}
                    />
                    <Icon color='#7C7D81' name='md-add' size={25}
                        style={{ paddingRight: 20, paddingBottom: 10 }}
                    />
                </View>

                <ScrollView>
                    {(this.state.contacts).map(
                        contact => (
                            <View
                                key={contact.uuid}
                                style={{ flexDirection: 'row', padding: 10, paddingBottom: 2 }}
                            >
                                <Icon name='md-star' size={20} color={'#89D1F2'}
                                    style={{ margin: 5, paddingRight: 4 }} />
                                <Image source={{ uri: contact.picture.thumbnail }}
                                    style={{
                                        height: 30, width: 30, borderRadius: 15
                                    }}
                                />
                                <View style={{marginLeft: 20}} >
                                    <Text>{contact.name}</Text>
                                    <Text>{contact.phone}</Text>
                                </View>
                            </View>
                        )
                    )}
                </ScrollView>
            </SafeAreaView>
        );
    }
}
export default Contacts;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});