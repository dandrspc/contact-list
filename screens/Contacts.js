import React, { Component } from "react";
import {
    SafeAreaView,
    StatusBar,
    Platform,
    View,
} from "react-native";
import { fetchUsers } from '@utils/api';
import Header from '../components/contacts/Header'
import SectionListContacts from '../components/contacts/SectionListContacts'


class Contacts extends Component {
    state = {
        contacts: [],
    }

    componentDidMount() {
        this.getUsers()
    }

    componentWillMount() {
        //Correction for android system header
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
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
                <Header startHeaderHeight={this.startHeaderHeight} />
                <View style={{ flex: 1, margin: 20, marginTop: 0, marginBottom: 0, }}>
                    <SectionListContacts contacts={this.state.contacts} navigation = {this.props.navigation} />
                </View>
            </SafeAreaView>
        );
    }
}
export default Contacts;