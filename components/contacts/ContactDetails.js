import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";


export default class ContactDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Contact Details</Text>
                <Text> {this.props.navigation.getParam('name')} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});