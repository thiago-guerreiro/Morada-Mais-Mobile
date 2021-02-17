import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Feed() {

    return (
        <ScrollView >
            <View style={specificStyle.container}>
                <SearchBar
                    placeholder="Pesquisar por região..."
                    containerStyle={{backgroundColor: '#6615dd'}}
                    inputContainerStyle={{backgroundColor: '#6615dd'}}
                    searchIcon={{color: '#fff'}}
                    inputStyle={{backgroundColor: 'white', height: 5, borderRadius: 5}}
                />
                <View style={specificStyle.card}>
                    <Text style={specificStyle.title}>CASA PRÓXIMO AO METRÔ</Text>
                    <Text style={specificStyle.title}>Valor: R$ 300, mensal</Text>
                    <Text style={specificStyle.data}>Data da oferta: 20/01/2021 21:53:46</Text>
                    <Image style={specificStyle.image} source={require('../assets/imoveis/casa1.jpg')} />
                    <Text style={specificStyle.descricao}>Meu perfil: Fumante e amante da arte</Text>
                    <Text style={specificStyle.descricao}>Região: Zona Leste</Text>
                    <Text style={specificStyle.descricao}>Descrição: 2 quartos, cozinha, sala e banhiero</Text>
                    <View style={specificStyle.icon}>
                        <MaterialCommunityIcons
                            name='chat'
                            size={20}
                            color='#424040'
                        />
                        <Text style={specificStyle.textIcon}>Chat</Text>
                        <MaterialCommunityIcons
                            name='share-outline'
                            size={20}
                            color='#424040'
                        />
                        <Text style={specificStyle.textIcon}>Compartilhar</Text>
                    </View>
                </View>

                <View style={specificStyle.card}>
                    <Text style={specificStyle.title}>2 QUARTOS GRANDES</Text>
                    <Text style={specificStyle.title}>Valor: R$ 300, mensal</Text>
                    <Text style={specificStyle.data}>Data da oferta: 20/01/2021 21:58:00</Text>
                    <Image style={specificStyle.image} source={require('../assets/imoveis/casa2.jpg')} />
                    <Text style={specificStyle.descricao}>Meu perfil: Fumante e amante da arte</Text>
                    <Text style={specificStyle.descricao}>Região: Zona Norte</Text>
                    <Text style={specificStyle.descricao}>Descrição: 2 quartos, sala, cozinha, banheiro reformado</Text>
                    <View style={specificStyle.icon}>
                        <MaterialCommunityIcons
                            name='chat'
                            size={20}
                            color='#424040'
                        />
                        <Text style={specificStyle.textIcon}>Chat</Text>
                        <MaterialCommunityIcons
                            name='share-outline'
                            size={20}
                            color='#424040'
                        />
                        <Text style={specificStyle.textIcon}>Compartilhar</Text>
                    </View>
                </View>

                <View style={specificStyle.card}>
                    <Text style={specificStyle.title}>CASA PROXIMA AO CENTRO</Text>
                    <Text style={specificStyle.title}>Valor: R$ 300, mensal</Text>
                    <Text style={specificStyle.data}>Data da oferta: 28/01/2021 09:52:12</Text>
                    <Image style={specificStyle.image} source={require('../assets/imoveis/casa3.jpg')} />
                    <Text style={specificStyle.descricao}>Meu perfil: Não fumante, aceito até 1 pet (cachorro ou gato)</Text>
                    <Text style={specificStyle.descricao}>Região: Zona Leste</Text>
                    <Text style={specificStyle.descricao}>Descrição: 2 quartos, banheiro, sala ampla e cozinha</Text>
                    <View style={specificStyle.icon}>
                        <MaterialCommunityIcons
                            name='chat'
                            size={20}
                            color='#424040'
                        />
                        <Text style={specificStyle.textIcon}>Chat</Text>
                        <MaterialCommunityIcons
                            name='share-outline'
                            size={20}
                            color='#424040'
                        />
                        <Text style={specificStyle.textIcon}>Compartilhar</Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}

const specificStyle = StyleSheet.create({
    container: {
        backgroundColor: '#6615dd',
    },
    card: {
        backgroundColor: '#fff',
        padding: 5,
        marginTop: 15,
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    data: {
        fontSize: 9,
        color: '#747476',
    },
    image: {
        height: 250,
    },
    descricao: {
        fontSize: 12,
        color: '#222121',
    },
    icon: {
        flexDirection: 'row',
        margin: 6,

    },
    textIcon: {
        fontSize: 12,
        color: '#000',
        paddingHorizontal: 6,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
})