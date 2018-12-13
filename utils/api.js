const URL = 'https://randomuser.me/api/?results=5&nat=us'

export const fetchUsers = async () => {
    const response = await fetch(URL)
    const { results } = await response.json()
    return results.map(processContact)
}

const processContact = contact =>({
    uuid: contact.login.uuid,
    name: `${contact.name.first} ${contact.name.last}`,
    phone: contact.phone,
    email: contact.email,
    picture: {...contact.picture},
})