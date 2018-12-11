import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fetchUsers } from '@utils/api';
import TabNavigator from '@navigation/TabNavigator'

export default class App extends React.Component {

  state = {
    contacts: null,
  }

  componentDidMount() {
    //this.getUsers()
  }

  getUsers = async () => {
    const results = await fetchUsers()
    this.setState({ contacts: results })
  }

  render() {
    return (
      <TabNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
