import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, View, TouchableOpacity, Alert } from 'react-native';
import { CheckBox, Input, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import styles from '../style/MainStyle';

export default function Cadastro({ navigation }) {

    const [email, setEmail] = useState(null)
    const [nome, setNome] = useState(null)
    const [cpf, setCpf] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [senha, setSenha] = useState(null)
    const [isSelected, setSelected] = useState(false)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorNome, setErrorNome] = useState(null)
    const [errorCpf, setErrorCpf] = useState(null)
    const [errorTelefone, setErrorTelefone] = useState(null)
    const [errorSenha, setErrorSenha] = useState(null)

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
        if (nome == null) {
            setErrorNome("Preencha seu nome")
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
        if (senha == null) {
            setErrorSenha("Escolha uma senha")
            error = true
        }
        return !error
    }

    const salvar = () => {
        if (validar()) {
            console.log("Salvou")
            Alert.alert(
                '',
                'Cadastro feito com sucesso!',
                [
                    {
                        text: '',
                        style: "cancel"
                    },
                    { text: "OK" }
                ],
                { cancelable: false }
            );
        }
    }

    const termos = () => {
        navigation.navigate("Termos")
    }

    const login = () => {
        navigation.navigate("Login")
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
                    onChangeText={value => {
                        setNome(value)
                        setErrorNome(null)
                    }}
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

                <Input
                    placeholder="Senha"
                    onChangeText={value => {
                        setSenha(value)
                        setErrorSenha(null)
                    }}
                    secureTextEntry={true}
                    errorMessage={errorSenha}
                />


                <TouchableOpacity
                    style={specificStyle.btnTermos}
                    onPress={() => termos()} >
                    <Text style={specificStyle.termosText}>Termos de Uso</Text>
                </TouchableOpacity>

                <CheckBox
                    center
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
                        style={styles.btnSubmit}
                        onPress={() => salvar()} >
                        <Text style={styles.submitText}>Cadastrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnRegister}
                        onPress={() => login()} >
                        <Text style={styles.registerText}>Já tem cadastro? Faça login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const specificStyle = StyleSheet.create({
    specificContainer: {
        backgroundColor: "#fff",
        padding: 10,
        paddingTop: 50,
    },
    button: {
        width: "100%",
        marginTop: 10,
    },
    btn: {
        alignItems: 'center',
    },
    btnTermos: {
        marginTop: 10,
    },
    termosText: {
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 5,
    },
})