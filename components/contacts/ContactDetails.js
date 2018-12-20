import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

export default ConstactDetails = props => (
    <View style={styles.container}>
        <Text>Contact Details</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});