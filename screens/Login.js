import React, { useState } from 'react';
import { View, Text, ImageBackground, Pressable, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native'
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

    function userLogin() {
        setIsLoading(true); 
        signInWithEmailAndPassword(auth, userMail, userPass)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    alert('Login Efetuado com Sucesso!');
                    console.log(user);                
                    navigation.navigate("Painel");
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
                    alert('E-mail ou senha incorretos. Por favor, tente novamente.');
                } else {
                    alert(errorMessage);
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    }
    
    
    
    
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
                    <View style={{ flex: 1, marginHorizontal: 22, }}>
                        {/* Se isLoading for verdadeiro, mostra o indicador de atividade */}
                        {isLoading && <ActivityIndicator size="large" color= "#191970" style={{ position: 'absolute', alignSelf: 'center', marginTop: '50%' }} />}
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
                            }}>Olá nós somos o E-Park!</Text>
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
                                        isPasswordShown == true ? (
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
                            marginVertical: 6
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
                            onPress={() => {
                                userLogin();6                                
                            }}
                            filled
                            style={{
                                marginLeft: 70,
                                marginTop: 18,
                                marginBottom: 4,
                                backgroundColor: '#191970'
                            }}
                        />              

                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            marginVertical: 22
                        }}>
                            <Text style={{ fontSize: 16, marginTop: 20, color: COLORS.black }}>Ainda não é cadastrado ? </Text>
                            <Pressable
                                onPress={() => navigation.navigate("Cadastro")}
                            >
                                <Text style={{
                                    fontSize: 16,
                                    color: COLORS.primary,
                                    fontWeight: "bold",
                                    marginLeft: 6,
                                    marginTop: 20
                                }}>Criar</Text>
                            </Pressable>
                        </View>
                        <Text style={{ color: 'black', marginTop: 200, marginLeft: 100 }}>powered by TTG-Group </Text>
                    </View>
                </TouchableWithoutFeedback>            
            </SafeAreaView>
        </ImageBackground>
    )
}

export default Login
