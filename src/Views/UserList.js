import React from 'react'
import { Text, View, FlatList, Alert } from 'react-native'
import users from '../data/users'
import { Avatar, Button, Icon, ListItem } from 'react-native-elements'


export default props => {

    function confirmUserDeletion(user){
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?',[
            {
                text: 'Sim',
                onPress(){
                    console.warn('delete' + user.id);
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions(user){
        return(
            <>
                <Button 
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type='clear'
                    icon={<Icon name='edit' size={25} color='orange'/>}
                />
                <Button 
                    onPress={() => confirmUserDeletion(user)}
                    type='clear'
                    icon={<Icon name='delete' size={25} color='red'/>}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem onPress={() => props.navigation.navigate('UserForm')}>
                <Avatar source={{ uri: user.avatarUrl }} />
                <ListItem.Content >
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <View style={{flexDirection:'row'}}>
                    {getActions(user)}
                </View>
                
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