import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet, TextInput, Image, ScrollView} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from "@expo/vector-icons";
import COLORS  from '../constants/colors';
import { FontAwesome } from '@expo/vector-icons';



const Card = () => {
    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const navigation = useNavigation(); 
    const [numero, setNumero] = useState('');
    const [nome, setNome] = useState('');
    const [validade, setValidade] = useState('');
    const [cvv, setCvv] = useState('');

    const handleSubmit = () => {
        console.log('Número:', numero);
        console.log('Nome:', nome);
        console.log('Validade:', validade);
        console.log('CVV:', cvv);
        // Você pode adicionar aqui a lógica para enviar os dados do cartão para o backend, por exemplo.
    };

    const formatarNumeroCartao = (numero) => {        
        const numerosApenas = numero.replace(/[^\d]/g, ""); 
        const numeroFormatado = numerosApenas.replace(/(\d{4})/g, '$1 ').trim();
        return numeroFormatado;
    }        
    const numeroCartao = "1234567890123456";
    const numeroFormatado = formatarNumeroCartao(numeroCartao);
    console.log(numeroFormatado);

    
      const handleCvvChange = (input) => {
        const formattedCvv = formatCvv(input);
        setCvv(formattedCvv);
      };

      const handlePainel = () => {        
        navigation.navigate('Painel'); 
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
                        onPress={() => navigation.navigate('Cartão')}>
                        <Icon name="credit-card" size={24} color="#F1C40F"/>
                        <Text style={styles.activeButton}>Cartão</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Veículo')}>
                        <Icon name="car" size={24} color="white" />
                        <Text style={styles.buttonText}>Veículo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Tickets')}>
                        <Icon name="ticket" size={24} color="white" />
                        <Text style={styles.buttonText}>Tíckets</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                
                <Text style={styles.title}>Cadastro do Cartão</Text>
                <View style={styles.separator}></View>

                <View style={styles.card}>
                <View style={{ backgroundColor: '#191970', borderTopLeftRadius: 5, borderTopRightRadius: 5, width: 359, marginLeft: -15, marginTop: -12 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                        <View style={styles.infoIcon}><Icon name="info-circle" size={25} color="white" /></View>
                        <Text style={{ color: 'white', marginLeft: 40 }}>Informações Obrigatórias*</Text>
                    </View>
                </View>
            
                

                <FontAwesome name="credit-card" size={50} color="black" style={styles.icon} />        
            
            <TextInput
                style={styles.input}
                placeholder="Número do Cartão *"
                value={formatarNumeroCartao(numero)}
                onChangeText={(text) => setNumero(formatarNumeroCartao(text))}
                keyboardType="numeric"
                maxLength={19}
            />
            <TextInput
                style={styles.input}
                placeholder="Nome do Titular *"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.input}
                placeholder="Validade (MM/YY) *"
                keyboardType="numeric" // Isso garante que apenas números sejam inseridos
                maxLength={5} // Limita o número máximo de caracteres para 5
                value={validade}
                onChangeText={text => {
                // Aplicar a máscara MM/YY
                if (text.length <= 5) {
                    // Permite até 5 caracteres (MM/YY)
                    let formattedText = text.replace(/\D/g, '').substring(0, 4);
                    if (formattedText.length > 2) {
                    // Insere a barra (/) após os primeiros 2 caracteres (MM)
                    formattedText = formattedText.replace(/(\d{2})(\d)/, '$1/$2');
                    }
                    setValidade(formattedText);
                }
                }}
            />
            <TextInput
                style={styles.input}
                placeholder="CVV *"
                secureTextEntry={!isPasswordShown}
                value={cvv}                                
                onChangeText={text => {                    
                    if (text.length <= 3) {
                        const formattedText = text.replace(/[^0-9]/g, '');                        
                        setCvv(formattedText);
                    }
                    
                }}
                keyboardType="numeric"
            />
                
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonSend}>Cadastrar</Text>
                    </TouchableOpacity>


                <TouchableOpacity style={styles.logoutButton} onPress={handlePainel}>
                    <Icon name="sign-out" size={24} color="black" />
                    <Text style={styles.logoutText}>Voltar</Text>
                </TouchableOpacity>

            </ScrollView>               
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
    menuButton: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 30,
        paddingBottom: 15,
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
        height:300,
        borderRadius: 8,
        padding: 16,
        marginVertical: 30,
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

    activeButton: {
        borderBottomWidth: 2,
        borderBottomColor: '#F1C40F',
        color: 'white'
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
        flex: 1,
        width: '70%',
        height: 40,
        backgroundColor: '#191970',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 60,
        marginTop: 30,
        borderRadius: 5,
        marginBottom: 5000
        
      },

    buttonText: {
        fontSize: 12,
        color: 'white'
        
    },

    buttonSend: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },

    logoutButton: {
        position: 'absolute',
        top: 635,
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

export default Card;
