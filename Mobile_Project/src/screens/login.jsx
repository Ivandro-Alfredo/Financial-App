import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// vefica se estiver a receber o statusbar é porque está no Android se não esta no IOS
const altura = StatusBar.currentHeight ? StatusBar.currentHeight + 30 : 60;

export default function Login() {
    return (
        <View>
            <View>
                <Ionicons
                    name="ios-person-circle-outline"
                    size={24}
                    color="black"
                />
                <Text>TELA DE LOGIN</Text>
            </View>
        </View>
    );
}
