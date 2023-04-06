import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Button, Icon } from 'react-native-elements'


export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    return (
        <View style={style.form}>
            <Text>Name</Text>
            <TextInput style={style.input}
                onChangeText={name => setUser({ ...user, name })}
                placeholder='Informe o Nome'
                value={user.name}
            />
            <Text>Email</Text>
            <TextInput style={style.input}
                onChangeText={email => setUser({ ...user, email })}
                placeholder='Informe o Email'
                value={user.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput style={style.input}
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder='Informe a URL do Avatar'
                value={user.avatarUrl}
            />
            <Button
                onPress={ () => {
                    navigation.goBack()
                }}
                icon={<Icon type='font-awesome' name='check' size={25} color='#fff' />}
            />
        </View>


    )
}

const style = StyleSheet.create({
    form: {
        padding: 12

    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,

    }
})