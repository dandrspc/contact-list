import React from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'


const Header = props => (
    <View style={{
        height: props.startHeaderHeight, backgroundColor: 'white',
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

)
export default Header;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});