import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet, TextInput, Image, ScrollView, Modal } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

const Veiculo = () => {
    const navigation = useNavigation(); 
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
    const [plate, setPlate] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [placas, setPlacas] = useState(['ABC1234', 'DEF5678', 'GHI91011']);
      

    const handleSubmit = () => {
        console.log('Marca:', marca);
        console.log('Modelo:', modelo);
        console.log('Ano:', ano);
        console.log('Placa do veículo:', plate);
       
    };
      
    const handlePlateChange = (text) => {
        let formattedText = '';
        text = text.toUpperCase().replace(/[^a-zA-Z0-9]/g, '');
        for (let i = 0; i < text.length && i < 3; i++) {
          if (/[a-zA-Z]/.test(text[i])) {
            formattedText += text[i];
          }
        }
        if (formattedText.length >= 3) {
          formattedText += '-';
        }
        for (let i = 3; i < text.length && i < 7; i++) {
          if (/[0-9]/.test(text[i])) {
            formattedText += text[i];
          }
        }
        setPlate(formattedText);
      };

      const handlePainel = () => {        
        navigation.navigate('Painel'); 
    };


    const handleConfirmar = () => {
        setModalVisible(true);
        navigation.navigate("Veículo");
        
    };

    const handleCancelar = () => {
        setModalVisible(false);
    };


    const handleExcluirPlaca = (placa) => {
        console.log(`Placa ${placa} excluída`);
        setModalVisible2(false);
        
      };
    
      const handleCancel = () => {
        setModalVisible2(false);
      };
    

    return (  
        <ImageBackground            
            style={{
                flex: 1,                
                justifyContent: 'center',                
            }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> 
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.menuBar}>
                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Painel')}>
                        <Icon name="bars" size={24} color="white" />
                        <Text style={styles.buttonText}>Painel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Perfil')}>
                        <Icon name="user" size={24} color="white" />
                        <Text style={styles.buttonText}>Perfil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Card')}>
                        <Icon name="credit-card" size={24} color="white" />
                        <Text style={styles.buttonText}>Cartão</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Veículo')}>
                        <Icon name="car" size={24} color="#F1C40F" />
                        <Text style={styles.activeButton}>Veículo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Tickets')}>
                        <Icon name="ticket" size={24} color="white" />
                        <Text style={styles.buttonText}>Tíckets</Text>
                    </TouchableOpacity>
                </View>
          
                

                <Text style={styles.title}>Cadastro de Veículos</Text>
                <View style={styles.separator}></View>                
                <View style={styles.card}>               
                <View style={{ backgroundColor: '#191970', height: 40, borderTopLeftRadius: 5, borderTopRightRadius: 5, width: 359, marginLeft: -15, marginTop: -12 }}> 
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                        <View style={styles.infoIcon}><Icon name="info-circle" size={25} color="white" /></View>
                        <Text style={{ color: 'white', marginLeft: 40 }}>Cadastre um ou mais veículos*</Text>
                    </View>                  
              </View>
                <FontAwesome name="car" size={50} color="black" style={styles.icon} />                            
                    <TextInput
                        style={styles.input}
                        placeholder="Marca"
                        value={marca}
                        onChangeText={setMarca}
                        importantForAccessibility="yes"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Modelo *"
                        value={modelo}
                        onChangeText={setModelo}
                        importantForAccessibility="yes"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Ano"
                        value={ano}
                        onChangeText={setAno}
                        importantForAccessibility="yes"
                        keyboardType="numeric" 
                        maxLength={4} 
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Placa *"
                        onChangeText={handlePlateChange}
                        value={plate}
                        maxLength={8} 
                        autoCapitalize="characters"
                    />                    
                </View>

                <TouchableOpacity style={styles.button} onPress={handleConfirmar}>
                    <Text style={styles.buttonSend}>Cadastrar</Text>
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
                            <Text>Veículo Cadastrado. Deseja Cadastrar outro?</Text>
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



                <TouchableOpacity style={styles.buttonexcluir} onPress={() => setModalVisible2(true)}>
                    <Text style={styles.buttonClear}>Excluir</Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible2}
                    onRequestClose={() => {
                    setModalVisible2(false);
                    }}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                        <Text>Escolha uma placa:</Text>
                        {placas.map((placa, index) => (
                        <TouchableOpacity key={index} style={{ backgroundColor: '#191970', padding: 10, borderRadius: 5, marginTop: 10, alignItems: 'center' }} onPress={() => {
                            setModalVisible2(true);
                           
                        }}>
                            <Text style={{ color: 'white' }}>{placa}</Text>
                        </TouchableOpacity>
                        ))}
                        <TouchableOpacity style={{ backgroundColor: '#ccc', padding: 10, borderRadius: 5, marginTop: 10, alignItems: 'center' }} onPress={handleCancel}>
                        <Text style={{ color: 'black' }}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </Modal>
                

            </SafeAreaView>
            </TouchableWithoutFeedback>
            
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 0,
    },
    menuBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#191970',
        paddingVertical: 10,
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
    
    menuButton: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 26,
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#191970'
    },

    separator: {
        borderBottomColor: '#F1C40F',
        borderBottomWidth: 2,
        marginVertical: 20,
        marginHorizontal: 23,
        width: 350
      },

      card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginVertical: 22,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    icon: {
        alignSelf: 'center',
        color: '#191970'
    },

    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 8,
    },


    input: {
        width: '100%',
        height: 40,
        borderColor: 'grey',
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        width: '70%',
        height: 40,
        backgroundColor: '#191970',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 60,
        marginTop: 30,
        borderRadius: 5,
      },
    

    buttonSend: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
       
        
    },

    buttonexcluir: {
        width: '70%',
        height: 40,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 60,
        marginTop: 20,
        borderRadius: 5,
        borderColor:'#191970',
        borderWidth: 1,
       
      },
    

    buttonClear: {
        fontSize: 18,
        color: '#191970',
        fontWeight: 'bold',
       
        
    },

    infoIcon: {
        position: 'absolute',
        top: 8,
        left: 0,
        width: 50,
        backgroundColor: '#191970',
        borderRadius: 100,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },


});



export default Veiculo;
