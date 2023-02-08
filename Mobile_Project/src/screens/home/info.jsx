import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../../Components/home_header/header';
import { useEffect } from 'react';

function Information({ navigation }) {
    //

    return (
        <View>
            <Header />
            {/**------------------------- */}

            <View style={style.container}>
                {/**minha view mais interna */}
                <View style={style.fundo}>
                    {/**define os redius na view da conta */}

                    <View>
                        <TouchableOpacity>
                            <MaterialIcons
                                name="cancel"
                                size={50}
                                color="black"
                                onPress={() => {
                                    navigation.goBack();
                                }}
                                style={style.cancel}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

/*=================== Estilizição ========================*/
const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 175,
    },
    fundo: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: -189,
        marginVertical: -285,
    },
    cancel: {
        marginTop: 375,
        marginLeft: 130,
    },
});

export default Information;
