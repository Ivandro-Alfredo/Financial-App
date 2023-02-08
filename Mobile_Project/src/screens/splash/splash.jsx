import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import routes from '../../Components/routes/routes';
import { FontAwesome } from '@expo/vector-icons';

function Splash() {
    const navigation = useNavigation();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#5b7c8d',
            }}
        >
            <StatusBar barStyle={'light-content'} />
            <FontAwesome
                name="circle"
                size={130}
                color="white"
                style={{ marginTop: -65 }}
            />
            <Text style={css.text}>Financial App</Text>
            <TouchableOpacity
                activeOpacity={0.7}
                style={{ marginTop: 35 }}
            >
                <Button
                    onPress={() => navigation.navigate(routes.DRAWER)}
                    title="Vamos Começar"
                    color="##9ec4bb"
                />
            </TouchableOpacity>
        </View>
    );
}

const css = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 30,
        color: 'white',
        marginTop: -10,
    },
});

export default Splash;
