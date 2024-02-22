import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet, Button, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from "@react-native-community/datetimepicker";

const Painel = () => {
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const confirmDate = () => {
        // Faça alguma ação com a data selecionada
        console.log('Data selecionada:', date);
        // Você pode adicionar aqui qualquer ação que deseja realizar com a data selecionada
        // Por exemplo, enviar para o servidor, atualizar o estado do componente pai, etc.
      };


    const handleLogout = () => {
        navigation.navigate('Login');
    };

    return (
        <ImageBackground
            source={require('../assets/background.png')}
            style={{
                flex: 1,
                justifyContent: 'center',
            }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.menuBar}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Painel')}>
                            <Icon name="bars" size={24} color="blue" />
                            <Text style={styles.buttonText}>Painel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Perfil')}>
                            <Icon name="user" size={24} color="black" />
                            <Text style={styles.buttonText}>Perfil</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Card')}>
                            <Icon name="credit-card" size={24} color="black" />
                            <Text style={styles.buttonText}>Cartão</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Veículo')}>
                            <Icon name="car" size={24} color="black" />
                            <Text style={styles.buttonText}>Veículo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Tickets')}>
                            <Icon name="ticket" size={24} color="black" />
                            <Text style={styles.buttonText}>Tíckets</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>



                <View style={{ flexDirection: 'row', marginTop: 350, marginLeft: 85 }}>
                    <Text style={{ color: 'black' }}>Tarifas do Estacionamento </Text>
                    <Pressable onPress={() => navigation.navigate("Termos")}>
                        <Text style={{ color: 'blue', fontWeight: 'bold' }}>Acesse</Text>
                    </Pressable>
                </View>




                <View style={{ marginTop: 30, width: 250, marginLeft: 70, borderRadius: 50, }}>
                    <Button onPress={showDatepicker} title="Selecione o Dia" />
                </View>
                <View style={{ marginTop: 30, width: 250, marginLeft: 70, borderRadius: 50 }}>
                    <Button onPress={showTimepicker} title="Selecione o Horario!" />
                </View>

                <Text style={{ marginTop: 30, backgroundColor: "#191970", padding: 20, color: "white", width: 250, marginLeft: 70, borderRadius: 5 }}>selected: {date.toLocaleString()}</Text>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                    
                )}               

                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Icon name="sign-out" size={24} color="black" />
                    <Text style={styles.logoutText}>Sair</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    menuBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#eee',
        paddingVertical: 0,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: 12,
    },
    activeButton: {
        borderBottomWidth: 2,
        borderBottomColor: 'blue',
    },
    logoutButton: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: '#eee',
    },
    logoutText: {
        fontSize: 16,
        color: 'black',
    },
});

export default Painel;
