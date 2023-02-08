import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// vefica se estiver a receber o statusbar é porque está no Android se não esta no IOS
const altura = StatusBar.currentHeight ? StatusBar.currentHeight + 30 : 60;

export default function Conta() {
    return (
        <View>
            <View>
                <FontAwesome
                    name="bank"
                    size={24}
                    color="black"
                />
                <Text>TELA DA BANK COUNT</Text>
            </View>
        </View>
    );
}
