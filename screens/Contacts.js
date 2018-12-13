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
import ContacRow  from '../components/contacts/ContactRow'
import Header  from '../components/contacts/Header'

const renderItem = ({item}) => <ContacRow {...item} />
const renderSetionHeader = ({section}) => <Text></Text>
 
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
                <Header startHeaderHeight = {this.startHeaderHeight} />
                <ScrollView>
                    {this.state.contacts.map(contact => <ContacRow key ={contact.uuid} {...contact}/>)}
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