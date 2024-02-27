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

    return (  
        <ImageBackground
            source={require('../assets/background.png')}
            style={{
                flex: 1,                
                justifyContent: 'center',                
            }}
        >
            <SafeAreaView style={{ flex: 1 }}>
            <Image
                    source={require('../assets/senha.png')}
                    style={{ alignSelf: 'center', width: 200, height: 200, marginTop: 100}}
                />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>                
                    <View style={styles.container}>
                        <Text style={styles.texto}>Nova Senha</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setNovaSenha}
                            value={novaSenha}
                            secureTextEntry={true}
                        />
                        <Text style={styles.texto}>Confirmar Senha</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setConfirmarSenha}
                            value={confirmarSenha}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity style={styles.button} onPress={handleSalvarSenha}>
                            <Text style={styles.buttonText}>Salvar Senha</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
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
        marginBottom: 10,
        paddingHorizontal: 20,
        textAlign: 'left',
    },
    input: {
        height: 40,
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
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default RedSenha;
