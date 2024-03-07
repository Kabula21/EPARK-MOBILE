import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet, TextInput, Image, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage'; 


const Perfil = () => {
    const navigation = useNavigation(); 
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [foto, setFoto] = useState(null);
    

    useEffect(() => {
        carregarDadosSalvos();
        carregarFotoSalva();
    }, []);

    const carregarDadosSalvos = async () => {
        try {
            const nomeSalvo = await AsyncStorage.getItem('nome');
            const emailSalvo = await AsyncStorage.getItem('email');
            if (nomeSalvo !== null) {
                setNome(nomeSalvo);
            }
            if (emailSalvo !== null) {
                setEmail(emailSalvo);
            }
        } catch (error) {
            console.error('Erro ao carregar dados salvos:', error);
        }
    };

    const carregarFotoSalva = async () => {
        try {
            const fotoSalva = await AsyncStorage.getItem('fotoPerfil');
            if (fotoSalva !== null) {
                setFoto(fotoSalva);
            }
        } catch (error) {
            console.error('Erro ao carregar foto salva:', error);
        }
    };

    const handleChoosePhoto = async () => {
        const permissionResult = await launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        
        if (permissionResult.canceled === false) {
            setFoto(permissionResult.uri);
            salvarFoto(permissionResult.uri);
        }
    };

    const salvarFoto = async (uri) => {
        try {
            await AsyncStorage.setItem('fotoPerfil', uri);
        } catch (error) {
            console.error('Erro ao salvar foto:', error);
        }
    };

    const handleSubmit = () => {
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Senha:', senha);
        
    };

    return (  
        <ImageBackground            
            style={{
                flex: 1,                
                justifyContent: 'center',                
            }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.menuBar}>
                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Painel')}>
                        <Icon name="bars" size={24} color="white" />
                        <Text style={styles.buttonText}>Painel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Perfil')}>
                        <Icon name="user" size={24} color="#F1C40F" />
                        <Text style={[styles.activeButton, { color: 'white' }]}>Perfil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Card')}>
                        <Icon name="credit-card" size={24} color="white" />
                        <Text style={styles.buttonText}>Cartão</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Veículo')}>
                        <Icon name="car" size={24} color="white" />
                        <Text style={styles.buttonText}>Veículo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Tickets')}>
                        <Icon name="ticket" size={24} color="white" />
                        <Text style={styles.buttonText}>Tíckets</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.separator}></View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleChoosePhoto} style={styles.profileImageContainer}>
                    {foto ? (
                        <Image source={{ uri: foto }} style={styles.profileImage} />
                    ) : (
                        <>
                            <Icon name="camera" size={30} color="gray" style={styles.cameraIcon} />
                            <Text style={styles.addPhotoText}>Adicionar Foto</Text>
                        </>
                    )}
                </TouchableOpacity>

                        <Text style={styles.title}>Dados Pessoais</Text>
                        
                        <Text style={{ color: 'black', marginTop: 10, fontSize: 25 }}>Nome do Perfil </Text>
                         <Text style={{ color: 'black', marginTop: 10, fontSize: 25 }}>Email do Usuário</Text>

                         
                    <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginVertical: 22
                        }}>
                    <Text style={{ fontSize: 16, marginTop: 30, color: 'black' }}>Redefina sua senha</Text>
                            <Pressable
                               onPress={() => navigation.navigate("RedSenha")}
                            >
                                <Text style={{
                                    fontSize: 16,
                                    color: '#F1C40F',
                                    fontWeight: 'bold',
                                    marginLeft: 6,
                                    marginTop: 30,
                                }}>Aqui!</Text>
                            </Pressable>
                        </View>

                         <Text style={{ color: 'black', marginTop: 100 }}>powered by TTG-Group </Text>
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
        paddingBottom: 0,
    },
    menuBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',                    
        paddingVertical: 10,
        backgroundColor: '#191970',
        
    },
    menuButton: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#191970'
        
    },

    activeButton: {
        borderBottomWidth: 2,
        borderBottomColor: '#F1C40F',
        color: 'white'
    },

    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white'
    },
    button: {
        width: '80%',
        height: 40,
        backgroundColor: '#191970',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,    
    },
    buttonText: {
        fontSize: 12,
        color: 'white'        
    },
    buttonSend:{
        color: 'white'
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 0,
    },
    addPhotoText: {
        fontSize: 16,
        color: 'grey',
        marginBottom: 0,
    },

    profileImageContainer: {
        width: 200,
        height: 200,
        borderRadius: 200,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    cameraIcon: {
        marginBottom: 12,
    },

    separator: {
        borderBottomColor: '#00BFFF',
        borderBottomWidth: 10,
        marginVertical: 0,
        marginHorizontal: 0,        
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 100
      },
});

export default Perfil;