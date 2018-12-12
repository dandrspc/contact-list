import React, { Component } from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    Platform
} from "react-native";
import {
    Header, Title, Content, Button, Icon, Text, List, ListItem, Thumbnail,
    Left, Right, Body, Container
} from "native-base"
import { fetchUsers } from '@utils/api';

const img = require("../assets/icon.png");
const datas = [
    {
        img: img,
        text: "Kumar Pratik",
        note: "Its time to build a difference . .",
        time: "3:43 pm"
    },
    {
        img: img,
        text: "Kumar Sanket",
        note: "One needs courage to be happy and smiling all time . . ",
        time: "1:12 pm"
    },
    {
        img: img,
        text: "Megha",
        note: "Live a life style that matchs your vision",
        time: "10:03 am"
    },
]

class ContactScreen extends Component {

    state = {
        contacts: null,
    }

    componentWillMount() {
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = async () => {
        const results = await fetchUsers()
        this.setState({ contacts: results })
        console.log(results)
    }

    render() {
        return (
            <Container style={{ backgroundColor: '#FFFFFF' }}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>

                    </Body>
                    <Right />
                </Header>
                <Content>
                    <List
                        dataArray={datas}
                        renderRow={data =>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail small source={data.img} />
                                </Left>
                                <Body>
                                    <Text>{data.text}</Text>
                                </Body>
                                <Body>
                                    <Text numberOfLines={1}>{data.note}</Text>
                                </Body>
                            </ListItem>}
                    >
                    </List>
                </Content>
            </Container>
        );
    }
}
export default ContactScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});