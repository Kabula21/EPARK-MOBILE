import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet, TextInput, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const RedSenha = () => {    
    const navigation = useNavigation();  
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleSalvarSenha = () => {        
        // Aqui você pode adicionar a lógica para salvar a nova senha
        // Após salvar, você pode navegar de volta para a tela de login
        navigation.navigate('Login'); 
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
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <SafeAreaView style={{ flex: 1 }}>
                    <Image
                        source={require('../assets/senha.png')}
                        style={{ alignSelf: 'center', width: 200, height: 200, marginTop: 30}}
                    />
                        
                    <View style={styles.container}>
                        <Text style={styles.texto}>Nova Senha</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setNovaSenha}
                            value={novaSenha}
                            secureTextEntry={true}
                            placeholder='Insira a Nova Senha'
                        />
                        <Text style={styles.texto}>Confirmar Senha</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setConfirmarSenha}
                            value={confirmarSenha}
                            secureTextEntry={true}
                            placeholder='Confirmar a Senha'
                        />
                        <TouchableOpacity style={styles.button} onPress={handleSalvarSenha}>
                            <Text style={styles.buttonText}>Salvar Senha</Text>
                        </TouchableOpacity>                          
                    </View>

                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                        <Icon name="sign-out" size={24} color="black" />
                        <Text style={styles.logoutText}>Sair</Text>
                </TouchableOpacity>
                                    
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
        paddingBottom: 100
        
    },
    texto: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'auto',
    },
    input: {
        height: 50,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginTop: 0,
        marginBottom: 20,
        borderRadius: 8,
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: '#191970',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },

    logoutButton: {        
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',        
        paddingVertical: 10,
        backgroundColor: '#eee',
    },
});

export default RedSenha;
