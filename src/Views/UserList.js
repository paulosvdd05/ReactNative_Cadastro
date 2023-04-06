import React from 'react'
import { Text, View, FlatList } from 'react-native'
import users from '../data/users'
import { Avatar, ListItem } from 'react-native-elements'


export default props => {

    function getUserItem({ item: user }) {
        return (
            <ListItem onPress={() => props.navigation.navigate('UserForm')}>
                <Avatar source={{ uri: user.avatarUrl }} />
                <ListItem.Content >
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                   
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}