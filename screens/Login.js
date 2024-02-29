import React, { useState } from 'react';
import { View, Text, Alert, ImageBackground, Pressable, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ActivityIndicator, ScrollView } from 'react-native'
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
                                color: COLORS.black
                            }}>
                                Bem Vindo ! 👋
                            </Text>

                            <Text style={{
                                fontSize: 16,
                                color: COLORS.black
                            }}>Olá, nós somos o E-Park!</Text>
                        </View>

                        <View style={{ marginBottom: 12 }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 400,
                                marginVertical: 8
                            }}>Email</Text>

                            <View style={{
                                width: "100%",
                                height: 48,
                                borderColor: COLORS.black,
                                borderWidth: 1,
                                borderRadius: 8,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: 22,
                                backgroundColor: "white"                               
                            }}>
                                <TextInput
                                    placeholder='Digite seu E-mail'
                                    placeholderTextColor={COLORS.black}
                                    keyboardType='email-address'
                                    value={userMail}
                                    onChangeText={setUserMail}
                                    style={{
                                        width: "100%",
                                        color: "black"
                                    }}
                                />
                            </View>
                        </View>

                        <View style={{ marginBottom: 12 }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 400,
                                marginVertical: 8
                            }}>Senha</Text>

                            <View style={{
                                width: "100%",
                                height: 48,
                                borderColor: COLORS.black,
                                borderWidth: 1,
                                borderRadius: 8,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: 22,
                                backgroundColor: "white"
                            }}>
                                <TextInput
                                    placeholder='Insira a Senha'
                                    placeholderTextColor={COLORS.black}
                                    secureTextEntry={isPasswordShown}
                                    value={userPass}
                                    onChangeText={setUserPass}
                                    style={{
                                        width: "100%",
                                        color: "black"
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
                                            <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                        ) : (
                                            <Ionicons name="eye" size={24} color={COLORS.black} />
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
                                color={isChecked ? COLORS.primary : undefined}
                            />

                            <Text>Lembrar de mim</Text>
                        </View>

                        <Button
                            title="Entrar"
                            onPress={handleLogin}
                            filled
                            style={{
                                marginLeft: 70,
                                marginTop: 50,
                                marginBottom: 4,
                                backgroundColor: '#191970'
                            }}
                        />  

                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            marginVertical: 22
                        }}>
                            <Text style={{ fontSize: 16, marginTop: 0, color: COLORS.black }}>Esqueci minha senha. </Text>
                            <Pressable
                                onPress={handleForgotPassword}
                            >
                                <Text style={{
                                    fontSize: 16,
                                    color: 'blue',
                                    fontWeight: "bold",
                                    marginLeft: 5,
                                    marginTop: 0
                                }}>Trocar Senha</Text>
                            </Pressable>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 , marginLeft: 55}}>
                            <Text style={{ color: 'black' }}>Não Possui Conta ainda? </Text>
                            <Pressable onPress={handleCreateAccount}>
                                <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 16 }}>Criar Conta</Text>                                
                            </Pressable>
                        </View> 
                        <Text style={{ color: 'black', marginTop: 80, marginLeft: 100 }}>powered by TTG-Group </Text> 
                    </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default Login
