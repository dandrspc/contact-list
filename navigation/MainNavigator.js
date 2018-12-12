import React from 'react'
import { Text } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Footer, FooterTab, Button, Icon } from 'native-base';
import Favorites from '@screens/Favorites'
import ContactScreen from '@screens/Contacts'
import Recent from '@screens/Recent'

export default MainNavigator = TabNavigator(
    {
        Recent: { screen: Recent },
        Contacts: { screen: ContactScreen },
        Favorites: { screen: Favorites },
    },
    {
        tabBarPosition: 'bottom',
        tabBarComponent: props => {
            return (
                <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            active={props.navigationState.index === 0}
                            onPress={() => props.navigation.navigate("Recent")}
                        >
                            <Icon name='md-clock' />
                            <Text>Recent</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 1}
                            onPress={() => props.navigation.navigate("Contacts")}
                        >
                            <Icon name='home' />
                            <Text>Contacts</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 2}
                            onPress={() => props.navigation.navigate("Favorites")}
                        >
                            <Icon name='star' />
                            <Text>Favorites</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            )
        }
    },    
    {
        tabBarOptions: {
            activeTintColor: '#89D1F2',
            inactiveTintColor: '#B7C8D1',
            style: {
                backgroundColor: 'white',
                elevation: 5,
            }
        }
    },{initialRouteName: 'Contacts'}
    

);
