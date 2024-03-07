import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Termos = () => {    
    const navigation = useNavigation();  
    const [texto1, setTexto1] = useState('');
    const [texto2, setTexto2] = useState('');

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
            <SafeAreaView style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.container}>
                        <Text style={styles.texto}>
                        <Icon name="exclamation-circle" size={100} color="red" />{"\n\n"}
                        <Text style={styles.bold}>Tarifas do Estacionamento</Text>{"\n\n"}
                        <Text style={styles.bold}>Horário Normal:</Text>{"\n"}
                            Primeira hora: R$ 5,00{"\n"}
                            A partir da segunda hora: R$ 2,00 por hora adicional{"\n\n"}
                        <Text style={styles.bold}>Horário de Pico (das 8h às 18h em dias úteis):</Text>{"\n"}
                            Primeira hora: R$ 7,00{"\n"}
                            A partir da segunda hora: R$ 3,00 por hora adicional{"\n\n"}
                        <Text style={styles.bold}>Tarifas Especiais:</Text>{"\n"}
                            Tarifas especiais podem ser aplicadas em feriados e eventos especiais. Consulte o aplicativo para informações atualizadas sobre tarifas especiais em estacionamentos selecionados. Lembramos que a cada hora passada do tempo haverá acréscimo no valor do estacionamento, conforme especificado acima.{"\n\n"}
                            Agradecemos por escolher nosso estacionamento para suas necessidades de estacionamento!{"\n\n"}
                            Última atualização: 22 de fevereiro de 2024
                        </Text>
                        
                        <View style={{ marginTop: 20 }}>
                           
                        </View>
                        
                    </View>
                </TouchableWithoutFeedback>
                
                <TouchableOpacity style={styles.logoutButton} onPress={handlePainel}>
                <Icon name="sign-out" size={24} color="black" />
                <Text style={styles.logoutText}>Voltar</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({   
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 16,
        marginBottom: 20,
        paddingHorizontal: 20,
        textAlign: 'left',
    },

    bold: {
        fontWeight: 'bold',
        color: '#191970'
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
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
});

export default Termos;
