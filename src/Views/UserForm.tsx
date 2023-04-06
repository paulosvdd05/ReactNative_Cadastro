import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'


export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    return (
        <View>
            <Text>Name</Text>
            <TextInput
                onChangeText={name => setUser({ ...user, name })}
                placeholder='Informe o Nome'
                value={user.name}
            />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        height: 40,
        

    }
})