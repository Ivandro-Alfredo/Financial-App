import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
//importa as navegações da minha tela de forma independente
import Home from '../screens/home/home';
import Information from '../screens/home/info';
import Orcamento from '../screens/home/orcamento';
const Tab = createBottomTabNavigator();

function Navegacao() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <AntDesign
                                name="home"
                                size={25}
                                color="black"
                                style={css.home}
                            />
                            <Text
                                style={{
                                    color: focused ? '#e32f45' : '#f748c94',
                                    fontSize: 12,
                                }}
                            >
                                Home
                            </Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Info"
                component={Information}
                options={{
                    tabBarStyle: { display: 'none' },
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <AntDesign
                                name="pluscircle"
                                size={50}
                                color="black"
                                style={css.btn}
                            />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Planejamento"
                component={Orcamento}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Foundation
                                name="dollar"
                                size={25}
                                color="black"
                                style={css.dollar}
                            />
                            <Text
                                style={{
                                    color: focused ? '#e32f45' : '#f748c94',
                                    fontSize: 12,
                                }}
                            >
                                Planejamento
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const css = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
    },
    home: {
        marginTop: 1,
        marginLeft: 3,
        txtHome: {
            marginTop: 85,
            marginLeft: -85,
        },
    },
    btn: {
        marginTop: -45,
        marginLeft: 1,
    },
    dollar: {
        marginTop: -4,
        marginLeft: 30,
        txtDollar: { marginTop: -10, marginLeft: -80 },
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

export default Navegacao;
