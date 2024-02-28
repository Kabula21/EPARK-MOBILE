import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet, TextInput, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native'; // Importação do hook useNavigation
import Icon from 'react-native-vector-icons/FontAwesome';

const Veiculo = () => {
    const navigation = useNavigation(); // Utilização do hook useNavigation
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
    const [placa, setPlaca] = useState('');

    const handleSubmit = () => {
        console.log('Marca:', marca);
        console.log('Modelo:', modelo);
        console.log('Ano:', ano);
        // Você pode adicionar aqui a lógica para enviar os dados do veículo para o backend, por exemplo.
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
                        <Icon name="user" size={24} color="black" />
                        <Text style={styles.buttonText}>Perfil</Text>
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
                        <Icon name="car" size={24} color="blue" />
                        <Text style={styles.buttonText}>Veículo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Tickets')}>
                        <Icon name="ticket" size={24} color="black" />
                        <Text style={styles.buttonText}>Tíckets</Text>
                    </TouchableOpacity>
                </View>
                
                <Image
                    source={require('../assets/veiculo.png')}
                    style={{ width: 300, height: 200, marginLeft: 50 }}
                />

                  
                    <View style={styles.container}>
                        <Text style={styles.title}>Cadastro de Veículo</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Marca do Veículo"
                            value={marca}
                            onChangeText={setMarca}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Modelo do Veículo"
                            value={modelo}
                            onChangeText={setModelo}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Ano do Veículo"
                            value={ano}
                            onChangeText={setAno}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Placa"
                            value={placa}
                            onChangeText={setPlaca}
                        />
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.buttonSend}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
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
        paddingBottom: 100,
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
        backgroundColor: "white"
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

    buttonSend: {
        fontSize: 16,
        color: 'white',
    },
});

export default Veiculo;
