import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { Text, Input } from 'react-native-elements';
import styles from '../style/MainStyle';

export default function Login({ navigation }) {

    const [descricao, setDescricao] = useState(null)


    const entrar = () => {
        console.log(email)
        console.log(password)
    }


    return (
        <View style={[styles.container, specificStyle.specificContainer]}>


            <Text style={specificStyle.text}>Descrição do imóvel</Text>
            <TextInput style={specificStyle.input}
                placeholder='ex: Casa próximo ao metrô'
                onChangeText={value => setDescricao(value)}
            />






        </View>
    );
}

const specificStyle = StyleSheet.create({
    specificContainer: {
        backgroundColor: '#fff',
    },
    logo: {
        width: 120,
        height: 120,
    },
    button: {
        width: '100%',
        marginTop: 10
    },

    input:{
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,

        height:40,
        backgroundColor:'#e6e6fa',
        borderRadius: 10,
        padding:10,
        marginBottom:10,
    },
    text: {
        textAlign: 'left',
        fontWeight: 'bold',
    },

})