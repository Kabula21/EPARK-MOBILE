import React, { useState } from 'react';
import { View, Text, Alert, ImageBackground, Pressable, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ActivityIndicator, ScrollView, StatusBar } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
import { auth } from '../src/firebase.config'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import COLORS  from '../constants/colors';

const Login = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [userMail, setUserMail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [isLoading, setIsLoading] = useState(false); 

    const handleLogin = () => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, userMail, userPass)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    Alert.alert("Sucesso!", "Login efetuado com sucesso!");
                    console.log(user);                
                    navigation.navigate("Painel");
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
                    Alert.alert('E-mail ou senha incorretos. Por favor, tente novamente.');
                } else {
                    Alert.alert("E-mail ou senha incorretos.", "\nPor favor, tente novamente.");
                }
                console.log(errorMessage);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const handleCreateAccount = () => {
        setIsLoading(true);
        // Implement your logic for creating account here
        // For demonstration purposes, I'm just navigating to the "Cadastro" screen
        navigation.navigate("Cadastro");
        setIsLoading(false);
    };

    const handleForgotPassword = () => {
        setIsLoading(true);
        // Implement your logic for forgot password here
        // For demonstration purposes, I'm just navigating to the "RedSenha" screen
        navigation.navigate("RedSenha");
        setIsLoading(false);
    };

    return (        
        <ImageBackground
            source={require('../assets/background.png')}
            style={{
                flex: 1,                
                justifyContent: 'center',                
            }}
        >

                <StatusBar
                    barStyle="light-content" // Define o estilo dos ícones de status
                    backgroundColor="transparent"
                    translucent={true} // Define a cor de fundo da barra de status
                />          

            <SafeAreaView style={{ flex: 1, }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <ScrollView>                
                    <View style={{ flex: 1, marginHorizontal: 22, }}>
                        {isLoading && <ActivityIndicator size="large" color="#191970" style={{ position: 'absolute', alignSelf: 'center', marginTop: '50%' }} />}
                        <View style={{ marginVertical: 22 }}>
                            <Text style={{
                                fontSize: 22,
                                fontWeight: 'bold',
                                marginVertical: 12,
                                color: '#F1C40F'
                            }}>
                                Bem Vindo ! 👋
                            </Text>

                            <Text style={{
                                fontSize: 16,
                                color: 'white'
                            }}>Olá, nós somos o E-Park!</Text>
                        </View>

                        <View style={{ marginBottom: 12 }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 400,
                                marginVertical: 8,
                                color: 'white'
                            }}></Text>

                            <View style={{
                                width: "100%",
                                height: 48,
                                borderColor: 'grey',
                                borderBottomWidth: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: 22,
                                backgroundColor: "transparent",
                                color: 'white'                               
                            }}>
                                <TextInput
                                    placeholder='Digite seu E-mail'
                                    placeholderTextColor={'white'}
                                    keyboardType='email-address'
                                    value={userMail}
                                    onChangeText={setUserMail}
                                    style={{
                                        width: "100%",
                                        color: "white"
                                    }}
                                />
                            </View>
                        </View>

                        <View style={{ marginBottom: 12 }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 400,
                                marginVertical: 8,
                                color: 'white'
                            }}></Text>

                            <View style={{
                                width: "100%",
                                height: 48,
                                borderColor: 'white',
                                borderBottomWidth: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: 22,
                                backgroundColor: "transparent"
                            }}>
                                <TextInput
                                    placeholder='Insira a Senha'
                                    placeholderTextColor={'white'}
                                    secureTextEntry={isPasswordShown}
                                    value={userPass}
                                    onChangeText={setUserPass}
                                    style={{
                                        width: "100%",
                                        color: "white"
                                    }}
                                />

                                <TouchableOpacity
                                    onPress={() => setIsPasswordShown(!isPasswordShown)}
                                    style={{
                                        position: "absolute",
                                        right: 12
                                    }}
                                >
                                    {
                                        isPasswordShown ? (
                                            <Ionicons name="eye-off" size={24} color={'white'} />
                                        ) : (
                                            <Ionicons name="eye" size={24} color={'white'} />
                                        )
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            marginVertical: 6,
                            marginHorizontal: 0
                        }}>
                            <Checkbox
                                style={{ marginRight: 8 }}
                                value={isChecked}
                                onValueChange={setIsChecked}
                                color={isChecked ? COLORS.primary : 'white'}
                            />

                            <Text style={{ color: 'white' }}>Lembrar de mim</Text>
                        </View>

                        <Button
                            title="Entrar"
                            onPress={handleLogin}
                            filled
                            style={{
                                marginLeft: 70,
                                marginTop: 50,
                                marginBottom: 4,
                                backgroundColor: '#F1C40F'
                            }}
                        />  

                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            marginVertical: 22
                        }}>
                            <Text style={{ fontSize: 16, marginTop: 0, color: 'white' }}>Esqueci minha senha. </Text>
                            <Pressable
                                onPress={handleForgotPassword}
                            >
                                <Text style={{
                                    fontSize: 16,
                                    color: '#F1C40F',
                                    fontWeight: "bold",
                                    marginLeft: 5,
                                    marginTop: 0
                                }}>Trocar Senha</Text>
                            </Pressable>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 , marginLeft: 55}}>
                            <Text style={{ color: 'white' }}>Não Possui Conta ainda? </Text>
                            <Pressable onPress={handleCreateAccount}>
                                <Text style={{ color: '#F1C40F', fontWeight: 'bold', fontSize: 16 }}>Criar Conta</Text>                                
                            </Pressable>
                        </View> 
                        <Text style={{ color: 'white', marginTop: 130, marginLeft: 100 }}>powered by TTG-Group </Text> 
                    </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default Login
