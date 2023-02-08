import React, { useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    StatusBar,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header_Add from '../../header_aux/header_aux';
import routes from '../../Components/routes/routes';

import { Modalize } from 'react-native-modalize';
import Header_Desp from './../../header_aux/headerDesp';
import Formulario_Desp from './../descricacao/formDespesa';

// vefica se estiver a receber o statusbar é porque está no Android se não esta no IOS
const altura = StatusBar.currentHeight ? StatusBar.currentHeight + 30 : 60;

export default function Despesa({ route }) {
    const modalizeRef = useRef(null);

    // const navigation = useNavigation();

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (
        <View>
            <ScrollView>
                {/** HEADER */}
                <Header_Desp p={route.params?.way} />
                {/**BODY */}
                <View style={style.fundo}>
                    <View style={style.container}>
                        <TouchableOpacity
                            onPress={onOpen}
                            style={{
                                marginTop: 365,
                                marginLeft: 138,
                            }}
                        >
                            <Text>
                                <AntDesign
                                    name="pluscircle"
                                    size={48}
                                    color="red"
                                />
                            </Text>
                        </TouchableOpacity>

                        {/** */}
                        <View></View>

                        {/**FIM */}

                        <View>
                            <Modalize
                                ref={modalizeRef}
                                snapPoint={480}
                                modalHeight={500}
                            >
                                {<Formulario_Desp />}
                            </Modalize>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

// ...
/*=================== Estilizição ========================*/
const style = StyleSheet.create({
    container: {
        paddingTop: altura,
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxHeight: 85,
    },
    fundo: {
        marginTop: -2,
        height: 500,
        backgroundColor: 'black',
    },
});
