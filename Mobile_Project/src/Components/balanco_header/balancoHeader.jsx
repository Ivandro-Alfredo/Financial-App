import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    useState,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// vefica se estiver a receber o statusbar é porque está no Android se não esta no IOS
const altura = StatusBar.currentHeight ? StatusBar.currentHeight + 30 : 60;

export default function BalancoHeader() {
    const navigation = useNavigation();

    return (
        <View style={style.container}>
            <StatusBar barStyle={'light-content'} />
            <View style={style.content}>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={style.receita}>Balanco Mensal</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

/*=================== Estilizição ========================*/
const style = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        paddingTop: altura,
        paddingStart: 14,
        paddingEnd: 30,
        paddingBottom: 40,
        flexDirection: 'row',
    },
    receita: {
        color: 'white',
        fontSize: 20,
        marginTop: -40,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    arrow: {
        marginTop: -45,
    },
});
