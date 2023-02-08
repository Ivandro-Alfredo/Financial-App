import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import routes from '../routes/routes';
import { Ionicons } from '@expo/vector-icons';

// vefica se estiver a receber o statusbar é porque está no Android se não esta no IOS
const altura = StatusBar.currentHeight ? StatusBar.currentHeight + 30 : 60;

export default function Header() {
    const navigation = useNavigation();
    //definação do useState
    const [receita, setReceita] = useState([]);
    const [despesa, setDespesa] = useState([]);

    //função que pega a receitas

    const getTotal = async () => {
        const resposta = axios
            .get('http://192.168.43.163:5000/receita_controller/totalReceita')
            .then((response) => {});
    };

    //função que seta a despensas
    const loadDespesa = async () => {
        const resposta = axios
            .fetch('http://192.168.43.163:5000/despesa_controller/totalDespesa')
            .then((resposta) => resposta.json())
            .then((dados) => setDespesa({ valor: dados }));
    };

    //definindo o useEffet
    useEffect(() => {
        getTotal();
        loadDespesa();
    });

    return (
        <View style={style.container}>
            <StatusBar barStyle={'light-content'} />
            <View style={style.menu}>
                <Ionicons
                    name="menu"
                    size={45}
                    color="white"
                    style={style.iconBuger}
                    onPress={() => navigation.openDrawer()}
                />
            </View>
            {/** */}
            <View style={style.content}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() =>
                        navigation.navigate(routes.RECEITA, { way: 'home' })
                    }
                >
                    <Text style={style.receita}>
                        Receitas{'\n'} AOA {receita.data}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate(routes.DESPESA)}
                >
                    <Text style={style.despesa}>
                        Despesas{'\n'} AOA {despesa.data}
                    </Text>
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
        paddingStart: 34,
        paddingEnd: 18,
        paddingBottom: -20,
        flexDirection: 'row',
    },
    receita: {
        color: 'green',
        fontSize: 20,
    },
    despesa: {
        color: 'red',
        fontSize: 20,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: -300,
    },
    menu: {
        flex: 1,
        alignItems: 'flex-start',
    },
    iconBuger: {
        marginTop: -29,
        marginLeft: -22,
        marginBottom: 65,
    },
});
