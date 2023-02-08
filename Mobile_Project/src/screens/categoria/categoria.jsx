import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Header_Categoria from '../../Components/categoria_header/catHeader';
import { useNavigation } from '@react-navigation/native';
import routes from '../../Components/routes/routes';

export default function CategoriaDespesa() {
    const navigation = useNavigation();
    return (
        <View>
            <ScrollView>
                {/**HEADER */}
                <Header_Categoria />
                {/**BODY */}
                <View style={style.fundo}>
                    <View style={style.container}>
                        <View>
                            <Text style={style.btn.despesa}>Despesas</Text>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() =>
                                    navigation.navigate(routes.CATEGORIARECEITA)
                                }
                            >
                                <Text style={style.btn.receita}>Receita</Text>
                            </TouchableOpacity>
                        </View>
                        {/**ICONES */}
                        <View>
                            <TouchableOpacity>
                                <FontAwesome
                                    name="home"
                                    size={24}
                                    color="black"
                                    style={{ marginStart: 20, marginTop: 10 }}
                                    activeOpacity={0.7}
                                    onPress={() =>
                                        navigation.navigate(routes.DESPESA)
                                    }
                                />
                                <Text style={style.casa}>Casa</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() =>
                                    navigation.navigate(routes.DESPESA)
                                }
                            >
                                <MaterialCommunityIcons
                                    name="book-open-page-variant"
                                    size={24}
                                    color="black"
                                    style={{ marginStart: 20, marginTop: 4 }}
                                />
                                <Text style={style.educacao}>Educação</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() =>
                                    navigation.navigate(routes.DESPESA)
                                }
                            >
                                <MaterialIcons
                                    name="medical-services"
                                    size={24}
                                    color="red"
                                    style={{ marginStart: 20, marginTop: 4 }}
                                />
                                <Text style={style.saude}>Saúde</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity></TouchableOpacity>
                            <Ionicons
                                name="car-sport-sharp"
                                size={24}
                                color="red"
                                style={{ marginStart: 20, marginTop: 4 }}
                            />
                            <Text style={style.carro}>Carro</Text>
                        </View>
                        <View>
                            <TouchableOpacity></TouchableOpacity>
                            <Ionicons
                                name="cart-sharp"
                                size={24}
                                color="black"
                                style={{ marginStart: 20, marginTop: 4 }}
                            />
                            <Text style={style.superMercado}>SuperMercado</Text>
                        </View>
                        <View>
                            <FontAwesome5
                                name="black-tie"
                                size={24}
                                color="black"
                                style={{ marginStart: 20, marginTop: 4 }}
                            />
                            <Text style={style.vetuario}>Vestuário</Text>
                        </View>
                        <View>
                            <Ionicons
                                name="airplane"
                                size={24}
                                color="black"
                                style={{ marginStart: 20, marginTop: 4 }}
                            />
                            <Text style={style.viagem}>Viagem</Text>
                        </View>
                        <View>
                            <FontAwesome5
                                name="swimmer"
                                size={24}
                                color="black"
                                style={{ marginStart: 20, marginTop: 4 }}
                            />
                            <Text style={style.lazer}>Lazer</Text>
                        </View>
                        <View>
                            <Ionicons
                                name="restaurant-sharp"
                                size={24}
                                color="black"
                                style={{ marginStart: 20, marginTop: 4 }}
                            />
                            <Text style={style.restaurante}>Restaurante</Text>
                        </View>
                        <View>
                            <MaterialIcons
                                name="miscellaneous-services"
                                size={24}
                                color="black"
                                style={{ marginStart: 20, marginTop: 4 }}
                            />
                            <Text style={style.servico}>Serviços</Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() =>
                                    navigation.navigate(routes.DESPESA)
                                }
                            >
                                <Text style={style.outros}>Outros</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() =>
                                    navigation.navigate(routes.DRAWER)
                                }
                            >
                                <Ionicons
                                    name="arrow-back-circle-sharp"
                                    size={52}
                                    color="black"
                                    style={{ marginStart: 133 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxHeight: 85,
    },
    fundo: {
        marginTop: -2,
        height: 500,
        backgroundColor: 'black',
    },
    btn: {
        receita: {
            width: '40%',
            height: 40,
            marginTop: -40,
            borderRadius: 20,
            borderWidth: 1,
            backgroundColor: 'black',
            color: 'green',
            fontSize: 20,
            marginStart: 165,
            borderColor: 'black',
            paddingVertical: 5,
            paddingLeft: 30,
        },
        despesa: {
            width: '40%',
            height: 40,
            marginTop: 35,
            borderRadius: 20,
            borderWidth: 1,
            backgroundColor: 'red',
            color: 'white',
            fontSize: 20,
            marginStart: 10,
            borderColor: 'red',
            paddingVertical: 5,
            paddingLeft: 20,
            marginStart: 13,
        },
    },
    casa: {
        fontSize: 18,
        marginStart: 50,
        marginTop: -23,
    },
    educacao: {
        fontSize: 18,
        marginStart: 50,
        marginTop: -23,
    },
    saude: {
        fontSize: 18,
        marginStart: 50,
        marginTop: -23,
    },
    carro: {
        fontSize: 18,
        marginStart: 50,
        marginTop: -23,
    },
    superMercado: {
        fontSize: 18,
        marginStart: 50,
        marginTop: -23,
    },
    vetuario: {
        fontSize: 18,
        marginStart: 50,
        marginTop: -23,
    },
    viagem: {
        fontSize: 18,
        marginStart: 50,
        marginTop: -23,
    },
    lazer: {
        fontSize: 18,
        marginStart: 50,
        marginTop: -28,
    },
    restaurante: {
        fontSize: 18,
        marginStart: 50,
        marginTop: -23,
    },
    servico: {
        fontSize: 18,
        marginStart: 50,
        marginTop: -23,
    },
    outros: {
        fontSize: 18,
        marginStart: 50,
        marginTop: 2,
    },
});
