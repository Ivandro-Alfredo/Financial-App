import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Button,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import {
    validarInput,
    validarDesc,
    validarMoeda,
} from '../../Components/validacao/validar';

export default function Formulario_Desp() {
    const [date, setDate] = useState(new Date());
    const [categoria, setCategoria] = useState();
    const [valor, setValor] = useState();
    const [descricao, setDescricao] = useState();
    const [datePicker, setDatePicker] = useState(false);
    const [showDate, setShowDate] = useState('SELECIONAR DATA');

    // VALIDAÇÃO DO FORMULARIO E CAMADA DENTRO DA FUNÇÃO ADICIONAR  { pattern: /^[A-Za-z]+$/i }
    //
    const [categoriaErr, setCategoriaErr] = useState(false);
    const [descricaoErr, setDescricaoErr] = useState(false);
    const [valorErr, setValorErr] = useState();

    //expresão regular para validar
    const validarInput = /^^[^\s][a-zA-ZÀ-ú ]*/;

    const validar = () => {
        if (showDate === 'SELECIONAR DATA') {
        }
        if (validarInput.test(categoria)) {
            alert('true.');
            setCategoriaErr(true);
        } else {
            alert('false.');
            setCategoriaErr(false);
        }
    };

    //ADICIONAR NA BASE DEDOS
    const handleAdReceita = async () => {
        axios
            .post('http://192.168.43.163:5000/despesa_controller/post', {
                data: date,
                categoria: categoria,
                descricao: descricao,
                valor: valor,
            })
            .then(alert('ADICIONADO COM SUCESSO!!'));
    };

    //substituir localhost por 192.168.43.163 na hora de fazer a coneção com o banco

    //

    function showDatePicker() {
        setDatePicker(true);
    }

    function onDateSelected(event, value) {
        setDate(value);
        setDatePicker(false);
        setShowDate(date.toDateString());
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ marginTop: 40 }}>
                    <Text style={{ flex: 1, marginTop: -5, fontSize: 30 }}>
                        Adicionar Despesa
                    </Text>
                    <View>
                        {datePicker && (
                            <DateTimePicker
                                value={date}
                                mode={'date'}
                                display={
                                    Platform.OS === 'ios'
                                        ? 'spinner'
                                        : 'default'
                                }
                                is24Hour={true}
                                onChange={onDateSelected}
                            />
                        )}

                        {!datePicker && (
                            <View>
                                <Text
                                    onPress={showDatePicker}
                                    style={styles.dtPicker}
                                >
                                    {showDate}
                                </Text>
                            </View>
                        )}
                    </View>

                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="CATEGORIA"
                            onChangeText={(event) => setCategoria(event)}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="DESCRIÇÃO "
                            onChangeText={(event) => setDescricao(event)}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="AOA 0.00"
                            keyboardType="numeric"
                            onChangeText={(event) => setValor(event)}
                        />
                    </View>

                    <TouchableOpacity onPress={(event) => handleAdReceita}>
                        <Text style={styles.btn.adicionar}> Adicionar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.btn.cancelar}> Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        fontSize: 16,
        fontWeight: '400',
        borderWidth: 1,
        color: 'black',
        padding: 15,
        marginVertical: 10,
        borderRadius: 5,
        height: 45,
        width: 255,
        paddingVertical: 0,
        borderColor: 'black',
        marginLeft: 10,
    },
    btn: {
        adicionar: {
            width: '40%',
            height: 40,
            marginTop: 10,
            borderRadius: 20,
            borderWidth: 1,
            backgroundColor: 'red',
            color: 'white',
            fontSize: 20,
            marginStart: 150,
            borderColor: 'red',
            paddingVertical: 5,
            paddingLeft: 5,
        },
        cancelar: {
            width: '40%',
            height: 40,
            marginTop: -40,
            borderRadius: 20,
            borderWidth: 1,
            backgroundColor: 'black',
            color: 'white',
            fontSize: 20,
            marginStart: 10,
            borderColor: 'black',
            paddingVertical: 5,
            paddingLeft: 5,
            marginStart: 15,
        },
    },
    dtPicker: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: '400',
        borderWidth: 1,
        color: 'black',
        padding: 15,
        paddingTop: 10,
        marginVertical: 10,
        borderRadius: 5,
        height: 45,
        width: 255,
        paddingVertical: 0,
        borderColor: 'black',
        marginLeft: 10,
    },
});
