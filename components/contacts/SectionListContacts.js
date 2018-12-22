import React from 'react'
import { SectionList, Text } from 'react-native'
import PropTypes from 'prop-types'
import ContactRow from './ContactRow'

const renderSectionHeader = ({ section }) =>
  <Text style={{ color: '#7C7D81', fontWeight: 'bold' }} >
    {section.title}
  </Text>


const SectionListContacts = props => {

  const handleSelectContact = (contact) => {
    props.navigation.navigate('ContactDetails', { ...contact })
    console.log('handle contatc select')
  }

  const renderItem = ({ item }) => <ContactRow
    key={item.uuid} {...item}
    navigation={props.navigation}
    onSelectContact={handleSelectContact}
  />

  const contactsByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase()
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    }
  }, {})

  const sections = Object.keys(contactsByLetter).sort().map(letter => ({
    data: contactsByLetter[letter],
    title: letter,
    key: letter,
  }))

  return <SectionList
    sections={sections}
    renderItem={renderItem}
    renderSectionHeader={renderSectionHeader}
    keyExtractor={(item, index) => item + index}
  />
}


SectionListContacts.propTypes = {
  contacts: PropTypes.array,
}

export default SectionListContacts