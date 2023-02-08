import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import BalancoHeader from '../../Components/balanco_header/balancoHeader';
import { Ionicons } from '@expo/vector-icons';
import routes from '../../Components/routes/routes';
import { useNavigation } from '@react-navigation/native';

export default function Balanco() {
    const navigation = useNavigation();
    return (
        <View>
            <ScrollView>
                <BalancoHeader />
                <View style={styles.fundo}>
                    {/**minha view mais interna */}
                    <View style={styles.container}>
                        <Text style={styles.cateoria}>
                            Balanço Por Categoria
                        </Text>
                        <Text style={styles.conta}>Balanço Por Conta</Text>

                        <View>
                            <View style={styles.content}>
                                <Text style={{ fontSize: 14 }}>
                                    Receita{'\n'}AOA{' '}
                                </Text>
                                <Text style={{ fontSize: 14 }}>
                                    Despesaa{'\n'}AOA
                                </Text>
                                <Text style={{ fontSize: 14 }}>
                                    Balanco{'\n'}AOA
                                </Text>
                            </View>

                            {/**Separador */}
                            <View
                                style={{
                                    borderBottomColor: 'black',
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                    marginTop: 8,
                                }}
                            />
                            {/**fim do separador */}
                            <View>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() =>
                                        navigation.navigate(routes.DRAWER)
                                    }
                                >
                                    <Ionicons
                                        name="arrow-back-circle-sharp"
                                        size={50}
                                        color="black"
                                        style={{
                                            marginTop: 250,
                                            marginStart: 133,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

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
    cateoria: {
        marginStart: 30,
        marginTop: 35,
        fontSize: 20,
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 20,
        width: 235,
        padding: 2,
        paddingLeft: 16,
        paddingVertical: 3,
    },
    conta: {
        marginStart: 30,
        marginTop: 10,
        fontSize: 20,
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 20,
        width: 200,
        padding: 2,
        paddingLeft: 16,
        paddingVertical: 3,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginStart: 20,
        marginEnd: 19,
        marginTop: 20,
    },
});
