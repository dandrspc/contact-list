import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Recent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Recent</Text>
            </View>
        );
    }
}
export default Recent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});