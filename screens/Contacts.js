import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Platform,
    SectionList,
} from "react-native";
import { fetchUsers } from '@utils/api';
import ContacRow from '../components/contacts/ContactRow'
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
            <SafeAreaView style={{ flex: 1 }}>
                <Header startHeaderHeight={this.startHeaderHeight} />
                <SectionListContacts
                    contacts = {this.state.contacts}
                />
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