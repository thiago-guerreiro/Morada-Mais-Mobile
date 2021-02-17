import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Text, Input } from 'react-native-elements';
import styles from '../style/MainStyle';

export default function Login({ navigation }) {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const entrar = () => {
        console.log(email)
        console.log(password)
        navigation.reset({
            index: 0,
            routes: [{ name: "Principal" }]
        })
    }

    const cadastrar = () => {
        navigation.navigate("Cadastro")
    }

    return (
        <View style={[styles.container, specificStyle.specificContainer]}>
            <Image style={specificStyle.logo} source={require('../assets/logo.png')} />
            <Input
                placeholder="E-mail"
                onChangeText={value => setEmail(value)}
                keyboardType="email-address"
            />
            <Input
                placeholder="Senha"
                onChangeText={value => setPassword(value)}
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={specificStyle.btnSubmit}
                onPress={() => entrar()} >
                <Text style={specificStyle.submitText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={specificStyle.btnRegister}
                onPress={() => cadastrar()} >
                <Text style={specificStyle.registerText}>Criar uma conta</Text>
            </TouchableOpacity>
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
    btnSubmit:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6615dd',
        height: 45,
        width: '60%',
        borderRadius: 7,
        marginTop: 10,
    },
    submitText:{
        color: '#fff',
        fontSize: 18,
    },
    btnRegister:{
        marginTop: 10,
    },
    registerText:{
        color: '#6615dd',
    },
})