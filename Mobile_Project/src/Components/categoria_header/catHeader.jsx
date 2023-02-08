import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import routes from '../routes/routes';

// vefica se estiver a receber o statusbar é porque está no Android se não esta no IOS
const altura = StatusBar.currentHeight ? StatusBar.currentHeight + 30 : 60;

export default function Header_Categoria() {
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            <StatusBar barStyle={'light-content'} />
            <View style={style.content}>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={style.categoria}>Cateoria</Text>
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
    categoria: {
        color: 'white',
        fontSize: 20,
        marginTop: -36,
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
