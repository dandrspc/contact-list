import React, { PureComponent } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

export default class ContactRow extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity
                key={this.props.uuid}
                style={{ flexDirection: 'row', padding: 10, paddingBottom: 2, }}
                onPress={this.props.onPress}
            >
                <Icon name='md-star' size={20} color={'#89D1F2'}
                    style={{ margin: 5, paddingRight: 4 }} />
                <Image source={{ uri: this.props.picture.thumbnail }}
                    style={{
                        height: 40, width: 40, borderRadius: 20
                    }}
                />
                <View
                    style={{ marginLeft: 20, fontWeight: 'bold' }}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }} >{convertCase(this.props.name)}</Text>
                    <Text style={{ color: '#B7C8D1', }}>{(this.props.phone)}</Text>
                </View>
            </TouchableOpacity >
        )

    }
    //Uppercase first letter of each word
}
const convertCase = name => {
    split = name.split(' ')
    return split.map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
