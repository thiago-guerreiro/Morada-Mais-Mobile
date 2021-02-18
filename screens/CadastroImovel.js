import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Picker, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CadastroImovel() {

    const [titulo, setTitulo] = useState(null)
    const [descricao, setDescricao] = useState(null)
    const [selectedValue, setSelectedValue] = useState("Selecinar Região");

    return (
        <View style={css.container}>
            <View style={css.container} />
            {/*<View style={css.form} >*/}

            <KeyboardAvoidingView
                //behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={css.form}
                keyboardVerticalOffset={30}>
  
                <Text style={css.text}>Título</Text>
                <TextInput style={css.input}
                    placeholder='ex: Casa próximo ao metrô'
                    onChangeText={value => setTitulo(value)}
                />

                <Text style={css.text}>Descrição do imóvel</Text>
                <TextInput style={css.input}
                    placeholder='ex: 2 quartos, sala ampla e cozinha'
                    onChangeText={value => setDescricao(value)}
                />

                <Text style={css.text}>Escolha a região</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={css.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Zona Leste" value="Zona Leste" />
                    <Picker.Item label="Zona Norte" value="Zona Norte" />
                    <Picker.Item label="Zona Oeste" value="Zona Oeste" />
                    <Picker.Item label="Zona Sul" value="Zona Sul" />
                </Picker>

                <Text style={css.text}>Fotos do imóvel</Text>
                <View style={css.selectImg}>
                    <MaterialCommunityIcons name="image-multiple" color='#e6e6fa' size={50} />
                    <MaterialCommunityIcons name="image-multiple" color='#e6e6fa' size={50} />
                    <MaterialCommunityIcons name="image-multiple" color='#e6e6fa' size={50} />
                </View>

                <Text style={css.text}>Valor da contribuição</Text>
                <TextInput style={css.input}
                    placeholder='R$ 000,00'
                />
            </KeyboardAvoidingView>
            {/*</View>*/}
            <View style={css.footer} />
        </View>
    );
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6615dd',
    },
    form: {
        flex: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 5,
    },
    logo: {
        width: 120,
        height: 120,
    },
    button: {
        width: '100%',
        marginTop: 10
    },

    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#e6e6fa',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    text: {
        textAlign: 'left',
        fontWeight: 'bold',
        paddingTop: 5,
    },
    picker: {
        height: 40,
        width: '80%',
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#e6e6fa',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    selectImg: {
        flexDirection: 'row',
    },
    footer: {
        flex: 1,
        backgroundColor: '#6615dd',
    }
})