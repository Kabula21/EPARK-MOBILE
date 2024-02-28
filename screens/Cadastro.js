import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ActivityIndicator, Alert, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from '../components/Button';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../src/firebase.config';



const Signup = ({ navigation }) => {
    const [userMail, setUserMail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userRePass, setUserRePass] = useState('');
    const [userName, setUserName] = useState('');

    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const [isRePasswordShown, setIsRePasswordShown] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);  

    const handleSignup = () => {
        
        if (isChecked === true) {
            if (userMail === '' || userPass === '' || userRePass === '') {
                Alert.alert("Todos os campos devem ser preenchidos", "")
                
            }
            if (userPass !== userRePass) {
                Alert.alert("As senhas não são iguais", "") 
            }
            
            createUserWithEmailAndPassword(auth, userMail, userPass)
                .then((UserCredential) => {
                    const user = UserCredential.user;
                    updateProfile(user, {
                        displayName: userName,
                    }).then(() => {
                        Alert.alert("O usuário " + userName + " foi criado.");
                        navigation.navigate("Login");
                    }).catch((error) => {
                        console.error("Erro ao atualizar perfil:", error);
                    });
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    
                    switch (errorMessage) {
                        case "Firebase: Error (auth/email-already-in-use).":
                            Alert.alert("Email em uso.", "Coloque outro email.");
                            break;
                        
                        case "Firebase: Error (auth/invalid-email).":
                            Alert.alert("Email inválido!", "Coloque um email válido.");
                            break;
                        
                        case "Firebase: Password should be at least 6 characters (auth/weak-password).":
                            Alert.alert("Senha inválida!", "A senha deve conter no mínimo 6 dígitos.");
                            break;
                    }
                    
                });
            
        } else {
            Alert.alert("Aceite os Termos e Condições", "");
        }
        
    };

    return (
        <ImageBackground
            source={require('../assets/background.png')}
            style={{
                flex: 1,
                justifyContent: 'center',
            }}
        >
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                
                    <View style={{ flex: 1, marginHorizontal: 22 }}>
                        {isLoading && <ActivityIndicator size="large" color= "#191970" style={{ position: 'absolute', alignSelf: 'center', marginTop: '50%' }} />}
                        <View style={{ marginVertical: 22 }}>
                            <Text style={{
                                fontSize: 22,
                                fontWeight: 'bold',
                                marginVertical: 12,
                                color: COLORS.black
                            }}>
                                Crie Sua Conta
                            </Text>
                        </View>

                        <View style={{ marginBottom: 12 }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: '400',
                                marginVertical: 8
                                
                            }}>Nome</Text>

                            <View style={{
                                width: '100%',
                                height: 48,
                                borderColor: COLORS.black,
                                borderWidth: 1,
                                borderRadius: 8,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingLeft: 22,
                                backgroundColor: 'white'
                                
                                
                            }}>
                                <TextInput
                                    placeholder='Nome'
                                    placeholderTextColor={COLORS.black}
                                    keyboardType='default'
                                    style={{
                                        width: '100%'
                                    }}
                                    onChangeText={setUserName}
                                />
                            </View>
                        </View>

                        <View style={{ marginBottom: 12 }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: '400',
                                marginVertical: 8,
                                
                            }}>Email</Text>

                            <View style={{
                                width: '100%',
                                height: 48,
                                borderColor: COLORS.black,
                                borderWidth: 1,
                                borderRadius: 8,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingLeft: 22,
                                backgroundColor: 'white'
                                
                            }}>
                                <TextInput
                                    placeholder='Insira seu Email'
                                    placeholderTextColor={COLORS.black}
                                    keyboardType='email-address'
                                    style={{
                                        width: '100%'
                                    }}
                                    onChangeText={setUserMail}
                                />
                            </View>
                        </View>

                        <View style={{ marginBottom: 12 }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: '400',
                                marginVertical: 8
                            }}>Senha</Text>

                            <View style={{
                                width: '100%',
                                height: 48,
                                borderColor: COLORS.black,
                                borderWidth: 1,
                                borderRadius: 8,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingLeft: 22,
                                backgroundColor: 'white'
                            }}>
                                <TextInput
                                    placeholder='Digite sua senha'
                                    placeholderTextColor={COLORS.black}
                                    secureTextEntry={isPasswordShown}
                                    style={{
                                        width: '100%'
                                    }}
                                    onChangeText={setUserPass}
                                />

                                <TouchableOpacity
                                    onPress={() => setIsPasswordShown(!isPasswordShown)}
                                    style={{
                                        position: 'absolute',
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

                        <View style={{ marginBottom: 12 }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: '400',
                                marginVertical: 8
                            }}>Comfirme a sua Senha</Text>

                            <View style={{
                                width: '100%',
                                height: 48,
                                borderColor: COLORS.black,
                                borderWidth: 1,
                                borderRadius: 8,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingLeft: 22,
                                backgroundColor: 'white'
                            }}>
                                <TextInput
                                    placeholder='Confirme a sua senha'
                                    placeholderTextColor={COLORS.black}
                                    secureTextEntry={isRePasswordShown}
                                    style={{
                                        width: '100%'
                                    }}
                                    onChangeText={setUserRePass}
                                />

                                <TouchableOpacity
                                    onPress={() => setIsRePasswordShown(!isRePasswordShown)}
                                    style={{
                                        position: 'absolute',
                                        right: 12
                                    }}
                                >
                                    {
                                        isRePasswordShown ? (
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
                            marginHorizontal: 0,

                        }}>
                            <Checkbox
                               style={{ marginRight: 8 }}
                               value={isChecked}
                               onValueChange={setIsChecked}
                               color={isChecked ? COLORS.primary : undefined}
                            />

                            <Text>Aceito os Termos e Condições</Text>
                        </View>

                        <Button
                            title="Cadastrar"
                            onPress={handleSignup}
                            filled
                            disabled={!isChecked}
                            style={{
                                marginLeft: 70,
                                marginTop: 18,
                                marginBottom: 4,
                                backgroundColor: '#191970'
                            }}
                        />

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginVertical: 22
                        }}>
                            <Text style={{ fontSize: 16, marginTop: 10, color: COLORS.black }}>Já tenho uma conta</Text>
                            <Pressable
                               onPress={() => navigation.navigate("Login")}
                            >
                                <Text style={{
                                    fontSize: 16,
                                    color: 'blue',
                                    fontWeight: 'bold',
                                    marginLeft: 6,
                                    marginTop: 10,
                                }}>Entrar</Text>
                            </Pressable>
                        </View>
                        <Text style={{ color: 'black', marginTop: 30, marginLeft: 100 }}>powered by TTG-Group </Text>
                    </View>
                    
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default Signup;
