import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet, TextInput, Image } from 'react-native'; // Adicionando Image
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native'; // Importação do hook useNavigation
import Icon from 'react-native-vector-icons/FontAwesome';

const Perfil = () => {
    const navigation = useNavigation(); // Utilização do hook useNavigation
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [foto, setFoto] = useState(null); // Novo estado para a foto

    const handleChoosePhoto = () => {
        // Adicione lógica aqui para permitir ao usuário escolher uma foto da galeria
    };

    const handleSubmit = () => {
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Senha:', senha);
        // Você pode adicionar aqui a lógica para enviar os dados do perfil para o backend, por exemplo.
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
                <View style={styles.menuBar}>
                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Painel')}>
                        <Icon name="bars" size={24} color="black" />
                        <Text style={styles.buttonText}>Painel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Perfil')}>
                        <Icon name="user" size={24} color="blue" />
                        <Text style={[styles.buttonText, { color: 'blue' }]}>Perfil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Card')}>
                        <Icon name="credit-card" size={24} color="black" />
                        <Text style={styles.buttonText}>Cartão</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Veículo')}>
                        <Icon name="car" size={24} color="black" />
                        <Text style={styles.buttonText}>Veículo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Tickets')}>
                        <Icon name="ticket" size={24} color="black" />
                        <Text style={styles.buttonText}>Tíckets</Text>
                    </TouchableOpacity>
                </View>

                

                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.container}>
                    <TouchableOpacity onPress={handleChoosePhoto} style={styles.profileImageContainer}>
                        {foto ? (
                            <Image source={{ uri: foto }} style={styles.profileImage} />
                        ) : (
                            <>
                                <Icon name="camera" size={24} color="gray" style={styles.cameraIcon} />
                                <Text style={styles.addPhotoText}>Adicionar Foto</Text>
                            </>
                        )}
                    </TouchableOpacity>
                        <Text style={styles.title}>Dados Pessoais</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome"
                            value={nome}
                            onChangeText={setNome}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Nova Senha"
                            secureTextEntry={true}
                            value={senha}
                            onChangeText={setSenha}
                        />
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.buttonSend}>Salvar</Text>
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
        paddingBottom: 0,
    },
    menuBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#eee',
        paddingVertical: 10,
    },
    menuButton: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
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
    },
    buttonSend:{
        color: 'white'
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 50,
        marginBottom: 20,
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
        marginBottom: 50,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    cameraIcon: {
        marginBottom: 5,
    },
});

export default Perfil;
