import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Keyboard, StyleSheet, Button, Pressable, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from "@react-native-community/datetimepicker";

const Painel = () => {
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [entryTime, setEntryTime] = useState(null);
    const [exitTime, setExitTime] = useState(null);
    const [dateEntrada, setDateEntrada] = useState(new Date());
    const [dateSaida, setDateSaida] = useState(new Date());
    const [showEntrada, setShowEntrada] = useState(false);
    const [showSaida, setShowSaida] = useState(false);
    const [vagasOcupadas, setVagasOcupadas] = useState(0);
    const [vagasLivres, setVagasLivres] = useState(20);

    const onChange = (event, selectedDateTime) => {
        const currentDate = selectedDateTime || date;
        setShow(false);
        
        if (mode === 'date' && !dateEntrada) {
            setDateEntrada(currentDate);
            setMode('time');
        } else if (mode === 'time' && !entryTime) {
            setEntryTime(currentDate);
            setMode('date');
        } else if (mode === 'date' && dateEntrada && entryTime && !dateSaida) {
            setDateSaida(currentDate);
            setMode('time');
        } else if (mode === 'time' && dateEntrada && entryTime && dateSaida && !exitTime) {
            setExitTime(currentDate);
            setMode('date');
        } else {
            setDateEntrada(null);
            setEntryTime(null);
            setDateSaida(null);
            setExitTime(null);
            setMode('date');
        }
    };
    
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const formatDate = (date) => {
        const options = { day: '2-digit', month: '2-digit' };
        const formatter = new Intl.DateTimeFormat('pt-BR', options);
        const formattedDate = formatter.format(date);
        return formattedDate;
    };

    const gerarTicket = () => {
        if (vagasLivres > 0) {
          setVagasOcupadas(vagasOcupadas + 1);
          setVagasLivres(vagasLivres - 1);
        } else {
          alert("Não há vagas disponíveis.");
        }
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
                <TouchableOpacity onPress={Keyboard.dismiss} accessible={false}>
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
                </TouchableOpacity>

                <ScrollView>

                <View style={{ flexDirection: 'row', marginTop: 5, backgroundColor: '#fff', borderRadius: 0, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                    <View style={{ flex: 1, padding: 15 }}>
                    <Text>Placa: ABC-1234</Text>
                    <View style={{ marginBottom: 10 }}></View>

                    <Text>Veículo: Carro</Text>
                    <View style={{ marginBottom: 10 }}></View>

                    <Text>Data Entrada: {formatDate(dateEntrada)}</Text>
                    <View style={{ marginBottom: 10 }}></View>

                    <Text>Hora de entrada: {entryTime ? entryTime.getHours().toString().padStart(2, '0') + ':' + entryTime.getMinutes().toString().padStart(2, '0') : '-'}</Text>
                    <View style={{ marginBottom: 10 }}></View>

                    <Text>Data Saída: {formatDate(dateSaida)}</Text>
                    <View style={{ marginBottom: 10 }}></View>

                    <Text>Hora de saída: {exitTime ? exitTime.getHours().toString().padStart(2, '0') + ':' + exitTime.getMinutes().toString().padStart(2, '0') : '-'}</Text>
                    <View style={{ marginBottom: 10 }}></View>

                    <Text>Regra: (Até 2h + Taxa)</Text>
                    <View style={{ marginBottom: 10 }}></View>

                    <Text>Total: R$10,00</Text>
                    </View>                 


                <View style={{ width: 1, backgroundColor: 'grey', marginRight: 70 }} />


                <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 60 }}>

                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <Text style={{ fontSize: 35, color: "red", fontWeight: "bold" }}>{vagasOcupadas}</Text>
                    <Text style={{ fontSize: 12 }}>OCUPADAS</Text>
                </View>

                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <Text style={{ fontSize: 35, color: "green", fontWeight: "bold" }}>{vagasLivres}</Text>
                    <Text style={{ fontSize: 12 }}>LIVRE</Text>
                </View>

                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <Text style={{ fontSize: 35, color: "#191970", fontWeight: "bold" }}>20</Text>
                    <Text style={{ fontSize: 12 }}>TOTAL</Text>
                </View>
                    </View>
                </View>



                <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 85 }}>
                    <Text style={{ color: 'black' }}>Tarifas do Estacionamento </Text>
                    <Pressable onPress={() => navigation.navigate("Termos")}>
                        <Text style={{ color: 'blue', fontWeight: 'bold' }}>Acesse</Text>
                    </Pressable>
                </View>

                <View style={{ marginVertical: 15, marginTop: 20 }}>
                    <View style={{ marginHorizontal: 50 }}>
                        <Button onPress={() => showMode('date')} title="Data Entrada" color= '#191970' />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <Icon name="chevron-down" size={20} color="black" />
                        </View>
                        <Button onPress={() => showMode('time')} title="Hora Entrada" color= '#191970' />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <Icon name="chevron-down" size={20} color="black" />
                        </View>
                        <Button onPress={() => showMode('date')} title="Data Saída" color= '#191970' />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <Icon name="chevron-down" size={20} color="black" />
                        </View>
                        <Button onPress={() => showMode('time')} title="Hora Saída" color= '#191970'  />
                    </View>
                    </View>
                
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
               

               <TouchableOpacity onPress={() => { gerarTicket(); navigation.navigate("Tickets"); }} style={{ marginTop: 5, width: 200, marginLeft: 90, alignItems: 'center', borderRadius: 5, backgroundColor: 'green' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="ticket" size={40} color="white" />
                    <Text style={{ marginLeft: 10, color: 'white' }}>Gerar Ticket</Text>
                </View>
                </TouchableOpacity>

                </ScrollView>

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
        paddingVertical: 5,
        backgroundColor: '#eee',
        flexDirection: 'row',
    },
    logoutText: {
        marginLeft: 5,
        fontSize: 16,
        color: 'black',
    },
});

export default Painel;
