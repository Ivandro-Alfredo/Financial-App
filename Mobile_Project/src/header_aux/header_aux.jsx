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
import { Entypo } from '@expo/vector-icons';
import routes from '../Components/routes/routes';

// vefica se estiver a receber o statusbar é porque está no Android se não esta no IOS
const altura = StatusBar.currentHeight ? StatusBar.currentHeight + 30 : 60;

export default function Header_Add(props) {
    const navigation = useNavigation();

    const chooseWay = () => {
        if (props.path === 'home') {
            navigation.navigate(routes.DRAWER);
        } else {
            navigation.navigate(routes.CATEGORIARECEITA);
        }
    };

    return (
        <View style={style.container}>
            <StatusBar barStyle={'light-content'} />
            <View style={style.content}>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={style.receita}>Nova Receita</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => chooseWay()}
                >
                    <Entypo
                        name="arrow-long-left"
                        size={40}
                        color="white"
                        style={style.arrow}
                    />
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
        color: 'green',
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
