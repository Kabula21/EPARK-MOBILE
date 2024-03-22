import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ActivityIndicator, Alert, Pressable, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import Checkbox from "expo-checkbox";
import Button from '../components/Button';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, firebaseApp } from '../src/firebase.config';
import { collection, getFirestore, getDocs, addDoc, doc, deleteDoc} from 'firebase/firestore';


const Signup = ({ navigation }) => {
    

    const [userMail, setUserMail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userRePass, setUserRePass] = useState('');
    const [userName, setUserName] = useState('');
<<<<<<< HEAD
    
   
=======
    const [users, setUsers] = useState([]);
>>>>>>> 296b5b0aea4cf108d3d374c6afa62726d4ad492b

    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const [isRePasswordShown, setIsRePasswordShown] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 
    
<<<<<<< HEAD
    
=======
    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, "usuario");
>>>>>>> 296b5b0aea4cf108d3d374c6afa62726d4ad492b

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef)
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getUsers();
    }, []);

    async function criarUser() {
        const user = await addDoc(userCollectionRef, {
            userName, userPass, userMail
        });
    }

    async function deleteUser(id) {
        const userDoc = doc(db, "usuario", id)
        await deleteDoc(userDoc);
    }

   const handleSignup = async () => {
        
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
            criarUser()

            
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

                <StatusBar
                    barStyle="light-content" // Define o estilo dos ícones de status
                    backgroundColor="transparent"
                    translucent={true} // Define a cor de fundo da barra de status
                />

            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <ScrollView>
                    <View style={{ flex: 1, marginHorizontal: 22 }}>
                        {isLoading && <ActivityIndicator size="large" color= "#191970" style={{ position: 'absolute', alignSelf: 'center', marginTop: '50%' }} />}
                        <View style={{ marginVertical: 22 }}>
                            <Text style={{
                                fontSize: 22,
                                fontWeight: 'bold',
                                marginVertical: 10,
                                marginBottom: -20,
                                color: '#F1C40F'
                            }}>
                                Crie Sua Conta
                            </Text>
                        </View>

                        <View style={{ marginBottom: 12 }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: '400',
                                marginVertical: 8,
                                color: 'white'
                            }}></Text>
                            <View style={{
                                width: '100%',
                                height: 48,
                                borderColor: 'grey',
                                borderBottomWidth: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingLeft: 22,
                                backgroundColor: 'transparent',
                                
                                
                            }}>
                                <TextInput
                                    placeholder='Nome'
                                    placeholderTextColor={'white'}
                                    keyboardType='default'
                                    style={{
                                        width: '100%',
                                        color: 'white'
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
                                
                            }}></Text>
                            <View style={{
                                width: '100%',
                                height: 48,
                                borderColor: 'grey',
                                borderBottomWidth: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingLeft: 22,
                                backgroundColor: 'transparent'
                                
                            }}>
                                <TextInput
                                    placeholder='Insira seu Email'
                                    placeholderTextColor={'white'}
                                    keyboardType='email-address'
                                    style={{
                                        width: '100%',
                                        color: 'white'
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
                            }}></Text>
                            <View style={{
                                width: '100%',
                                height: 48,
                                borderColor: 'grey',
                                borderBottomWidth: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingLeft: 22,
                                backgroundColor: 'transparent'
                            }}>
                                <TextInput
                                    placeholder='Digite sua senha'
                                    placeholderTextColor={'white'}
                                    secureTextEntry={isPasswordShown}
                                    style={{
                                        width: '100%',
                                        color: 'white'
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
                                            <Ionicons name="eye-off" size={24} color={'white'} />
                                        ) : (
                                            <Ionicons name="eye" size={24} color={'white'} />
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
                            }}></Text>

                            <View style={{
                                width: '100%',
                                height: 48,
                                borderColor: 'grey',
                                borderBottomWidth: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingLeft: 22,
                                backgroundColor: 'transparent'
                            }}>
                                <TextInput
                                    placeholder='Confirme a sua senha'
                                    placeholderTextColor={'white'}
                                    secureTextEntry={isRePasswordShown}
                                    style={{
                                        width: '100%',
                                        color: 'white'
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
                            marginHorizontal: 0,

                        }}>
                            <Checkbox
                               style={{ marginRight: 8 }}
                               value={isChecked}
                               onValueChange={setIsChecked}
                               color={isChecked ? COLORS.primary : 'white'}
                            />

           

                        <Text style={{ color:'white' }}>Aceito os Termos e Condições</Text>
                        </View>

                         <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: 10, marginTop: -30 }}>
                                <TouchableOpacity onPress={() => navigation.navigate("Aceite")}>
                                    <View style={{ width: 28, height: 28, borderRadius: 50, borderColor: 'white', borderWidth: 2, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name="info" size={15} color="white" />
                                    </View>
                                </TouchableOpacity>
                            </View>

                        <Button
                            title="Cadastrar"
                            onPress={handleSignup}
                            filled
                            disabled={!isChecked}
                            style={{
                                marginLeft: 70,
                                marginTop: 40,
                                marginBottom: 4,
                                backgroundColor: '#F1C40F',
                                fontWeight: 'bold'
                            }}
                        />


                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginVertical: 22
                        }}>
                            <Text style={{ fontSize: 16, marginTop: 10, color: 'white' }}>Já tenho uma conta</Text>
                            <Pressable
                               onPress={() => navigation.navigate("Login")}
                            >
                                <Text style={{
                                    fontSize: 16,
                                    color: '#F1C40F',
                                    fontWeight: 'bold',
                                    marginLeft: 6,
                                    marginTop: 10,
                                }}>Entrar</Text>
                            </Pressable>
                        </View>
                        
                        <Text style={{ color: 'white', marginTop: 30, marginLeft: 100 }}>powered by TTG-Group </Text>
                    </View>
                    </ScrollView>
                    
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default Signup;
