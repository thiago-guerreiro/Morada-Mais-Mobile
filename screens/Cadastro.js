import React, { useState } from 'react';
import { Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { CheckBox, Input, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function Cadastro({ navigation }) {

    const [email, setEmail] = useState(null)
    const [nome, setNome] = useState(null)
    const [cpf, setCpf] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [isSelected, setSelected] = useState(false)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorNome, setErrorNome] = useState(null)
    const [errorCpf, setErrorCpf] = useState(null)
    const [errorTelefone, setErrorTelefone] = useState(null)

    let cpfField = null
    let telefoneField = null

    const validar = () => {
        let error = false
        setErrorEmail(null)
        setErrorCpf(null)

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(email).toLowerCase())) {
            setErrorEmail("Preencha seu e-mail corretamente")
            error = true
        }
        if (!cpfField.isValid()) {
            setErrorCpf("CPF inválido")
            error = true
        }
        if (telefone == null) {
            setErrorTelefone("Preencha seu telefone corretamente")
            error = true
        }
        return !error
    }

    const salvar = () => {
        if (validar()) {
            console.log("Salvou")
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={[styles.container, specificStyle.specificContainer]}
            keyboardVerticalOffset={80}>
            <ScrollView style={{ width: "100%" }}>

                <Input
                    placeholder="E-mail"
                    onChangeText={value => {
                        setEmail(value)
                        setErrorEmail(null)
                    }}
                    keyboardType="email-address"
                    errorMessage={errorEmail}
                />

                <Input
                    placeholder="Nome"
                    onChangeText={value => setNome(value)}
                    errorMessage={errorNome}
                />

                <View style={styles.containerMask}>
                    <TextInputMask
                        placeholder="CPF"
                        type={'cpf'}
                        value={cpf}
                        onChangeText={value => {
                            setCpf(value)
                            setErrorCpf(null)
                        }}
                        keyboardType="number-pad"
                        returnKeyType="done"
                        style={styles.maskedInput}
                        ref={(ref) => cpfField = ref}
                    />
                </View>
                <Text style={styles.errorMessage}>{errorCpf}</Text>

                <View style={styles.containerMask}>
                    <TextInputMask
                        placeholder="Telefone"
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={telefone}
                        onChangeText={value => {
                            setTelefone(value)
                            setErrorTelefone(null)
                        }
                        }
                        keyboardType="phone-pad"
                        returnKeyType="done"
                        style={styles.maskedInput}
                        ref={(ref) => telefoneField = ref}
                    />
                </View>
                <Text style={styles.errorMessage}>{errorTelefone}</Text>

                <CheckBox
                    title="Li e aceito os termos de uso"
                    checkedIcon="check"
                    uncheckedIcon="square-o"
                    checkedColor="green"
                    uncheckedColor="red"
                    checked={isSelected}
                    onPress={() => setSelected(!isSelected)}
                />
                <View style={specificStyle.btn}>
                <TouchableOpacity
                    style={specificStyle.btnSubmit}
                    onPress={() => salvar()} >
                    <Text style={specificStyle.submitText}>Cadastrar</Text>
                </TouchableOpacity>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const specificStyle = StyleSheet.create({
    specificContainer: {
        backgroundColor: "#fff",
        padding: 10
    },
    button: {
        width: "100%",
        marginTop: 10,
    },
    btn: {
        alignItems: 'center',
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
})