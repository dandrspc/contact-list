import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import Favorites from '@screens/Favorites'
import Contacts from '@screens/Contacts'
import Recent from '@screens/Recent'

export default TabNavigator = createBottomTabNavigator(
    {
        Recent: {
            screen: Recent,
            navigationOptions: {
                tabBarLabel: 'Recent',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='ios-time' color={tintColor} size={24} />
                )
            }
        },
        Contacts: {
            screen: Contacts,
            navigationOptions: {
                tabBarLabel: 'Contacts',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='md-person' color={tintColor} size={25} />
                )
            }
        },
        Favorites: {
            screen: Favorites,
            navigationOptions: {
                tabBarLabel: 'Favorites',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='md-star' color={tintColor} size={25} />
                )
            }
        },
    },
    {   
        initialRouteName: "Contacts",
        tabBarOptions: {
            activeTintColor: '#89D1F2',
            inactiveTintColor: '#B7C8D1',
            style: {
                backgroundColor: 'white',
                elevation: 5,
            }
        }
    },
);
