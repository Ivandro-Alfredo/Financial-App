import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Header_Categoria from '../../Components/categoria_header/catHeader';
import { useNavigation } from '@react-navigation/native';
import routes from '../../Components/routes/routes';

export default function CategoriaReceita() {
    const navigation = useNavigation();
    return (
        <View>
            <ScrollView>
                {/**HEADER */}
                <Header_Categoria />
                <View style={style.fundo}>
                    <View style={style.container}>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() =>
                                    navigation.navigate(routes.CATEGORIA)
                                }
                            >
                                <Text style={style.btn.despesa}>Despesas</Text>
                            </TouchableOpacity>
                            <Text style={style.btn.receita}>Receita</Text>
                        </View>

                        {/**Icons */}
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() =>
                                    navigation.navigate(routes.RECEITA)
                                }
                            >
                                <FontAwesome5
                                    name="money-check-alt"
                                    size={21}
                                    color="#38d995"
                                    style={{ marginStart: 15, marginTop: 30 }}
                                />
                                <Text style={style.investimento}>
                                    Investimento
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() =>
                                    navigation.navigate(routes.RECEITA)
                                }
                            >
                                <Entypo
                                    name="credit-card"
                                    size={24}
                                    color="#6476ce"
                                    style={{ marginStart: 15, marginTop: 2 }}
                                />
                                <Text style={style.salario}>Salário</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() =>
                                    navigation.navigate(routes.RECEITA)
                                }
                            >
                                <SimpleLineIcons
                                    name="present"
                                    size={24}
                                    color="red"
                                    style={{ marginStart: 15, marginTop: 5 }}
                                />
                                <Text style={style.presente}>Presente</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() =>
                                    navigation.navigate(routes.RECEITA)
                                }
                            >
                                <Entypo
                                    name="trophy"
                                    size={24}
                                    color="#e5b34a"
                                    style={{ marginStart: 15, marginTop: 5 }}
                                />
                                <Text style={style.premio}>Prêmio</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() =>
                                    navigation.navigate(routes.RECEITA)
                                }
                            >
                                <Text style={style.outro}>Outros</Text>
                            </TouchableOpacity>
                        </View>

                        {/**Icon seta para volta */}
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() =>
                                    navigation.navigate(routes.CATEGORIA)
                                }
                            >
                                <Ionicons
                                    name="arrow-back-circle-sharp"
                                    size={50}
                                    color="black"
                                    style={{ marginTop: 140, marginStart: 133 }}
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
            backgroundColor: 'green',
            color: 'white',
            fontSize: 20,
            marginStart: 165,
            borderColor: 'green',
            paddingVertical: 5,
            paddingLeft: 30,
        },
        despesa: {
            width: '40%',
            height: 40,
            marginTop: 35,
            borderRadius: 20,
            borderWidth: 1,
            backgroundColor: 'black',
            color: 'red',
            fontSize: 20,
            marginStart: 10,
            borderColor: 'black',
            paddingVertical: 5,
            paddingLeft: 20,
            marginStart: 13,
        },
    },
    investimento: {
        fontSize: 24,
        marginStart: 50,
        marginTop: -28,
    },
    salario: {
        fontSize: 24,
        marginStart: 50,
        marginTop: -28,
    },
    presente: {
        fontSize: 24,
        marginStart: 50,
        marginTop: -28,
    },
    premio: {
        fontSize: 24,
        marginStart: 50,
        marginTop: -28,
    },
    outro: {
        fontSize: 24,
        marginStart: 50,
        marginTop: -2,
    },
});
