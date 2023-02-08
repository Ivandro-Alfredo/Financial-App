import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../../Components/home_header/header';

const Stack = createNativeStackNavigator();

export default function Home() {
    //definação do useState
    const [receita, setReceita] = useState([]);
    const [despesa, setDespesa] = useState([]);

    //função que pega a receitas

    const getTotal = async () => {
        const resposta = axios
            .get('http://192.168.43.163:5000/receita_controller/totalReceita')
            .then((response) => {
                setReceita(response.data.valor);
            });
        alert(' aaa ' + receita);
    };

    //função que seta a despensas
    const loadDespesa = async () => {
        const resposta = axios
            .get('http://192.168.43.163:5000/despesa_controller/totalDespesa')
            .then((response) => {
                // setReceita(response);
                response.data.map((value) => {
                    setDespesa(value.valor);
                });
            });
    };

    //definindo o useEffet
    useEffect(() => {
        getTotal();
        loadDespesa();
    });

    return (
        <View>
            <ScrollView>
                <Header />
                <View style={styles.fundo}>
                    {/**minha view mais interna */}
                    <View style={styles.container}>
                        {/**define os redius na view da conta */}
                        <View style={styles.redius}>
                            <View>
                                <Text style={{ marginTop: 5, fontSize: 24 }}>
                                    Contas
                                </Text>
                                <View>
                                    <Text
                                        style={{
                                            width: 35,
                                            textAlign: 'center',
                                        }}
                                    ></Text>
                                </View>
                                <Text style={{ marginTop: -20, fontSize: 18 }}>
                                    Minha Carteira AOA {receita}
                                </Text>
                                <Text style={{ marginTop: 2, fontSize: 18 }}>
                                    Minha Poupança AOA 0.00
                                </Text>
                                <Text style={{ marginTop: 2, fontSize: 18 }}>
                                    Minha Conta Corrente AOA 0.00
                                </Text>
                            </View>
                        </View>

                        {/**define os redius na view da despesa */}
                        <View style={styles.redius}>
                            <View>
                                <Text style={{ marginTop: 5, fontSize: 24 }}>
                                    Despesa Por Categoria
                                </Text>
                                <View>
                                    <Text
                                        style={{
                                            width: 35,
                                            textAlign: 'center',
                                        }}
                                    ></Text>
                                </View>

                                <Text style={{ marginTop: -20, fontSize: 18 }}>
                                    casa AOA 0.00
                                </Text>
                                <Text style={{ marginTop: 2, fontSize: 18 }}>
                                    Lazer AOA 0.00
                                </Text>
                                <Text style={{ marginTop: 2, fontSize: 18 }}>
                                    Educação AOA 0.00
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
/*
//SEPARADOR
const hr= ViewStyle={
    height:1,
    width:'100%',
    backgroundColor:'black'
}

const separador =()=> <View style={hr}/>*/
// estilo css
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    fundo: {
        marginTop: -2,
        height: 500,
        backgroundColor: 'black',
    },
    redius: {
        flex: 0.3,
        width: 300,
        paddingVertical: 1,
        maxHeight: 140,
        paddingLeft: 15,
        paddingTop: 5,
        marginLeft: 11,
        marginTop: 22,
        borderWidth: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    texo: {},
    home: {
        marginTop: 19,
        marginLeft: 3,
        txtHome: {
            marginTop: 85,
            marginLeft: -65,
        },
    },
    btn: {
        marginTop: 19,
        marginLeft: 55,
    },
    dollar: {
        marginTop: 19,
        marginLeft: 55,
        txtDollar: { marginTop: 85, marginLeft: -80 },
    },
    iconsView: {
        paddingStart: 10,
        paddingEnd: 15,
        paddingBottom: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
