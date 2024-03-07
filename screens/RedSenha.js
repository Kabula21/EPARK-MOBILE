import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import COLORS  from '../constants/colors';
import { FontAwesome } from '@expo/vector-icons';

const RedSenha = () => {   
    const [isPasswordShown, setIsPasswordShown] = useState(true);
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
                
                <ScrollView>

                <FontAwesome name="lock" size={100} color="black" style={styles.icon} />                    
                    
                
                    <View style={styles.container}>
                        <Text style={styles.texto}></Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setNovaSenha}
                            value={novaSenha}
                            secureTextEntry={isPasswordShown}
                            placeholder='Insira a Nova Senha'
                            placeholderTextColor='white'
                                                      
                            
                        />
                        <Text style={styles.texto}></Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setConfirmarSenha}
                            value={confirmarSenha}
                            secureTextEntry={isPasswordShown}
                            placeholder='Confirmar a Senha'
                            placeholderTextColor='white'
                        />

                    <TouchableOpacity
                        onPress={() => setIsPasswordShown(!isPasswordShown)}
                        style={{
                            position: "absolute",
                            bottom: 175, 
                            right: 50, 
                        }}
                    >
                        {isPasswordShown ? (
                            <Ionicons name="eye-off" size={24} color={'white'} />
                        ) : (
                            <Ionicons name="eye" size={24} color={'white'} />
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setIsPasswordShown(!isPasswordShown)}
                        style={{
                            position: "absolute",
                            bottom: 75, 
                            right: 50, 
                        }}
                    >
                        {isPasswordShown ? (
                            <Ionicons name="eye-off" size={24} color={'white'} />
                        ) : (
                            <Ionicons name="eye" size={24} color={'white'} />
                        )}
                    </TouchableOpacity>




                        <TouchableOpacity style={styles.button} onPress={handleSalvarSenha}>
                            <Text style={styles.buttonText}>Salvar Senha</Text>
                        </TouchableOpacity>                          
                    </View>
                    </ScrollView>
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
        paddingTop: 50
        
    },
    texto: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'auto',
        color: 'white'
    },
    input: {
        height: 50,
        width: '80%',
        borderColor: 'grey',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        marginTop: 0,
        marginBottom: 20,              
        backgroundColor: 'transparent',
        color: "#fff"
        
    },
    button: {
        backgroundColor: '#F1C40F',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: '#191970',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
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

    icon: {
        alignSelf: 'center',
        color: 'white',
        marginTop: 100

    },
});

export default RedSenha;
