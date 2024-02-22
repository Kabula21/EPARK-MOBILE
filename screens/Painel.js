import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; // Importação do hook useNavigation

const Painel = () => {
    const [activeButton, setActiveButton] = useState('Perfil');
    const navigation = useNavigation(); // Utilização do hook useNavigation

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        // Adiciona a navegação para a tela de perfil quando o botão de perfil é pressionado
        if (buttonName === 'Perfil') {
            navigation.navigate('Perfil');
        }
    };

    const handleLogout = () => {
        // Implemente a lógica de logout aqui
        // Por exemplo, limpe o estado do usuário, remova o token de autenticação, etc.
        // Em seguida, redirecione o usuário para a tela de login ou para onde desejar
        navigation.navigate('Login'); // Supondo que 'Login' seja o nome da tela de login
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
                            style={[styles.button, activeButton === 'Painel' && styles.activeButton]}
                            onPress={() => handleButtonClick('Painel')}>
                            <Icon name="bars" size={24} color="blue"  />
                            <Text style={styles.buttonText}>Painel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, activeButton === 'Perfil' && styles.activeButton]}
                            onPress={() => handleButtonClick('Perfil')}>
                            <Icon name="user" size={24} color="black"  />
                            <Text style={styles.buttonText}>Perfil</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, activeButton === 'Card' && styles.activeButton]}
                            onPress={() => handleButtonClick('Card')}>
                            <Icon name="credit-card" size={24} color={activeButton === 'Card' ? 'blue' : 'black'} />
                            <Text style={styles.buttonText}>Cartão</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, activeButton === 'Veículo' && styles.activeButton]}
                            onPress={() => handleButtonClick('Veículo')}>
                            <Icon name="car" size={24} color={activeButton === 'Veiculo' ? 'blue' : 'black'} />
                            <Text style={styles.buttonText}>Veículo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, activeButton === 'Tíckets' && styles.activeButton]}
                            onPress={() => handleButtonClick('Tíckets')}>
                            <Icon name="ticket" size={24} color={activeButton === 'Tíckets' ? 'blue' : 'black'} />
                            <Text style={styles.buttonText}>Tíckets</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
                
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
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#eee',
        marginTop: 610,
        
    },
    logoutText: {
        fontSize: 16,
        color: 'black',
        
    },
});

export default Painel;

