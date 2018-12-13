import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

export default ContactRow = props => (
    <View
        key={props.uuid}
        style={{ flexDirection: 'row', padding: 10, paddingBottom: 2 }}
    >
        <Icon name='md-star' size={20} color={'#89D1F2'}
            style={{ margin: 5, paddingRight: 4 }} />
        <Image source={{ uri: props.picture.thumbnail }}
            style={{
                height: 40, width: 40, borderRadius: 20
            }}
        />
        <View style={{ marginLeft: 20 }} >
            <Text>{props.name}</Text>
            <Text>{props.phone}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
