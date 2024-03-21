import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet, TextInput, Image, ScrollView, Modal, Linking} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from "@expo/vector-icons";
import COLORS  from '../constants/colors';
import { FontAwesome } from '@expo/vector-icons';



const Card = () => {
    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const navigation = useNavigation(); 
    

   

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
                
                <Text style={styles.title}>Forma de Pagamento</Text>
                <View style={styles.separator}></View>

                <View style={styles.card}>
                <View style={{ backgroundColor: '#191970', borderTopLeftRadius: 5, borderTopRightRadius: 5, width: 359, marginLeft: -15, marginTop: -12 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                        <View style={styles.infoIcon}><Icon name="info-circle" size={25} color="white" /></View>
                        <Text style={{ color: 'white', marginLeft: 40 }}>Escolha o método*</Text>
                    </View>
                </View>
            
                

                <FontAwesome name="credit-card" size={50} color="black" style={styles.icon} />

                <TouchableOpacity style={styles.innerCard}>
                    <Text style={styles.innerCardTitle}>Pague Usando Paypal</Text>
                    <Text style={styles.innerCardSubTitle}>       Rápido, fácil e seguro</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.paypal.com/pt/home')}>
                        <Image source={require('../assets/paypal.png')} style={styles.innerCardImage} />
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={styles.innerCard}>
                    <Text style={styles.innerCardTitle}>Pague Usando Pagseguro</Text>
                    <Text style={styles.innerCardSubTitle}>Pix, Débito ou Crédito</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://pagseguro.uol.com.br/conta-digital')}>
                    <Image source={require('../assets/pagseguro.png')} style={styles.innerCardImage} />
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={styles.innerCard}>
                    <Text style={styles.innerCardTitle}>Pague Usando Mercado Pago</Text>
                    <Text style={styles.innerCardSubTitle}>Facilite na hora de pagar</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.mercadopago.com.br/')}>
                    <Image source={require('../assets/mercadopago.png')} style={styles.innerCardImage} />
                    </TouchableOpacity>
                </TouchableOpacity>

            </View> 
        </SafeAreaView>
        </TouchableWithoutFeedback>

                <Image source={require('../assets/todoscartoes.png')} style={{width: 300, height: 50, marginVertical: 45, marginLeft: 50 }} />

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
        height:400,
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



    innerCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 3,
        borderColor: '#00BFFF',
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        shadowColor: '#00BFFF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    innerCardTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: -35,
    },

    innerCardSubTitle: {
        fontSize: 12,
        textAlign: 'left',
        marginTop: 10,
        marginLeft: -230,
        fontStyle: 'italic'
    },
    innerCardImage: {
        width: 75,
        height: 40,
        resizeMode: 'contain',
    },

   
});

export default Card;
