import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Keyboard, StyleSheet, Modal, Button, Pressable, ScrollView, Platform , StatusBar} from 'react-native';
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
    const [modalVisible, setModalVisible] = useState(false);
    const [estadoAnterior, setEstadoAnterior] = useState(null);
    const [vagasOcupadas, setVagasOcupadas] = useState(0);
    const [vagasLivres, setVagasLivres] = useState(30);

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
            setModalVisible(true);
            setEstadoAnterior({ vagasLivres, vagasOcupadas }); 
        } else {
            alert("Não há vagas disponíveis."); 
        }
    };

    const handleConfirmar = () => {
        setModalVisible(false);
        navigation.navigate("Tickets");
        
    };

    const handleCancelar = () => {
        if (estadoAnterior !== null) {
            setVagasLivres(estadoAnterior.vagasLivres); 
            setVagasOcupadas(estadoAnterior.vagasOcupadas);         }
        setModalVisible(false);
    };

    const handleLogout = () => {
        navigation.navigate('Login');
    };


    const [statusBarStyle, setStatusBarStyle] = useState('light-content');
    const [navBarColor, setNavBarColor] = useState('#000'); 

    useEffect(() => {
      if (Platform.OS === 'android') {        
        const contrastColor = calculateContrastColor(navBarColor);
        setStatusBarStyle(contrastColor === 'white' ? 'dark-content' : 'light-content');
      }
    }, [navBarColor]);

    const handleStatusBarPress = () => {     
      setNavBarColor(navBarColor === '#000' ? '#FFF' : '#000');
    };

    const calculateContrastColor = (color) => {
      return color === '#000' ? 'dark' : 'light';
    };

    return (
        <ImageBackground            
            style={{
                flex: 1,
                justifyContent: 'center',                
            }}
        >
            <TouchableOpacity onPress={handleStatusBarPress}>
        <StatusBar
          barStyle={statusBarStyle}
          translucent={false}
          backgroundColor="#191970"
        />
      </TouchableOpacity>


            <SafeAreaView style={{ flex: 1 }}>
                <TouchableOpacity onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.menuBar}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Painel')}>
                            <Icon name="bars" size={24} color="#F1C40F" />
                            <Text style={styles.activeButton}>Painel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Perfil')}>
                            <Icon name="user" size={24} color="white" />
                            <Text style={styles.buttonText}>Perfil</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Card')}>
                            <Icon name="credit-card" size={24} color="white" />
                            <Text style={styles.buttonText}>Cartão</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Veículo')}>
                            <Icon name="car" size={24} color="white" />
                            <Text style={styles.buttonText}>Veículo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Tickets')}>
                            <Icon name="ticket" size={24} color="white" />
                            <Text style={styles.buttonText}>Tíckets</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.separator}></View> 
                </TouchableOpacity>

                <ScrollView>

                
                <View style={{ flexDirection: 'column', marginTop: 5,  marginLeft: 15, justifyContent: 'center', backgroundColor: '#FFF', 
                height: 130, width: 370, borderRadius: 5, borderBottomWidth: 2, borderBottomColor: '#DCDCDC'}}>
                    <View style={{ backgroundColor: 'transparent', height: 40, width: '100%', borderTopLeftRadius: 5, borderTopRightRadius: 5, marginTop: 0 }}>
                        <Text style={{ color: '#191970',fontWeight: 'bold',  marginLeft: 10, marginTop: 20, fontSize: 16 }}>Status</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginLeft: 50, marginBottom: 30 }}>
                    <View style={{ alignItems: 'center', paddingRight: 25, marginRight: 25, borderRightWidth: 1, borderColor: '#191970' }}>
                        <Text style={{ fontSize: 50, color: "red", fontWeight: "bold" }}>{vagasOcupadas}</Text>
                        <Text style={{ fontSize: 15 }}>OCUPADAS</Text>
                    </View>
                    <View style={{ alignItems: 'center', paddingRight: 25, marginRight: 25, borderRightWidth: 1, borderColor: '#191970' }}>
                        <Text style={{ fontSize: 50, color: "green", fontWeight: "bold" }}>{vagasLivres}</Text>
                        <Text style={{ fontSize: 15 }}>LIVRE</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginRight: 50 }}>
                    <Text style={{ fontSize: 50, color: "#191970", fontWeight: "bold" }}>30</Text>
                    <Text style={{ fontSize: 15 }}>TOTAL</Text>
                    <Text style={{ fontSize: 10, marginTop: 5 }}>10 Especiais*</Text>
                    </View>
                    </View>
                </View>  
                <Text style={{ color: '#A9A9A9', marginTop: 10, fontSize: 15, marginBottom: -10, marginLeft: 17 }}>Definir: Data / Hora</Text>                              

                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: 0 }}>
                    <View style={{ width: '40%', alignItems: 'center', justifyContent: 'center', marginBottom: 50 }}>
                        <TouchableOpacity onPress={() => showMode('date')} style={{ width: 130, height: 130, backgroundColor: '#191970', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                            <Icon name="calendar" size={50} color="white" />
                            <Text style={{ color: 'white' }}>Data Entrada</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '40%', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => showMode('time')} style={{ width: 130, height: 130, backgroundColor: '#191970', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                            <Icon name="clock-o" size={50} color="white" />
                            <Text style={{ color: 'white' }}>Hora Entrada</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '40%', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => showMode('date')} style={{ width: 130, height: 130, backgroundColor: '#191970', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                            <Icon name="calendar" size={50} color="white" />
                            <Text style={{ color: 'white' }}>Data Saída</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '40%', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => showMode('time')} style={{ width: 130, height: 130, backgroundColor: '#191970', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                            <Icon name="clock-o" size={50} color="white" />
                            <Text style={{ color: 'white' }}>Hora Saída</Text>
                        </TouchableOpacity>
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

                <Text style={{ color: '#A9A9A9', marginTop: 10, fontSize: 15, marginBottom: -10, marginLeft: 17 }}>Gere sua Reserva</Text>

            <TouchableOpacity
                onPress={gerarTicket}
                style={{
                    marginTop: 30, width: 150, height: 40, alignItems: 'center', justifyContent: 'center', marginLeft: 120,
                    borderRadius: 3, backgroundColor: '#F1C40F', flexDirection: 'row',
                }}>

                <View style={{ marginRight: 8 }}>
                    <Icon name="ticket" size={30} color="#191970" />
                </View>

                <View style={{ borderWidth: 2, height: '100%', borderStyle: 'dashed', borderColor: 'white', borderRadius: 1 }} />

                <View style={{ marginLeft: 15 }}>
                    <Text style={{ color: '#191970', fontWeight: 'bold' }}>Gerar Ticket</Text>
            </View>

            </TouchableOpacity>


                <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(true);
                }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                        <Text>Deseja Confirmar?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, }}>
                        <TouchableOpacity style={{ backgroundColor: '#191970', padding: 10, borderRadius: 2 }} onPress={handleConfirmar}>
                                <Text style={{ color: 'white' }}>Sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#191970', padding: 10, borderRadius: 2 }} onPress={handleCancelar}>
                                <Text style={{ color: 'white' }}>Não</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

                <View style={{ flexDirection: 'row', marginTop: 36, marginLeft: 85 }}>
                    <Text style={{ color: 'black' }}>Tarifas do Estacionamento </Text>
                    <Pressable onPress={() => navigation.navigate("Termos")}>
                        <Text style={{ color: 'blue', fontWeight: 'bold' }}>Acesse</Text>
                    </Pressable>
                </View>

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
        backgroundColor: '#191970',
        paddingVertical: 0,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        color: 'white'
    },
    buttonText: {
        fontSize: 12,
        color: 'white'
    },
    activeButton: {
        borderBottomWidth: 2,
        borderBottomColor: '#F1C40F',
        color: 'white'
    },
    logoutButton: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        backgroundColor: '#DCDCDC',
        flexDirection: 'row',
    },
    logoutText: {
        marginLeft: 5,
        fontSize: 16,
        color: 'black',
    },

    separator: {
        borderBottomColor: '#00BFFF',
        borderBottomWidth: 10,
        marginVertical: 0,
        marginHorizontal: 0,        
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 100
      },
});

export default Painel;
