import React from 'react'
import { createStackNavigator } from 'react-navigation'
import ContactDetails from '../components/contacts/ContactDetails'
import Contacts from '@screens/Contacts'

export default ContactsNavigator = createStackNavigator(
    {
        ContactList: { 
            screen: Contacts, 
            navigationOptions: {
                header: null
            }
        },
        ContactDetails: { screen: ContactDetails, },
    }, {
        initialRouteName: 'ContactList',        
    }
)

