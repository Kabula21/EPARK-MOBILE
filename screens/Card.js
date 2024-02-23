import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet, TextInput, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native'; // Importação do hook useNavigation
import Icon from 'react-native-vector-icons/FontAwesome';

const Card = () => {
    const navigation = useNavigation(); // Utilização do hook useNavigation
    const [numero, setNumero] = useState('');
    const [nome, setNome] = useState('');
    const [validade, setValidade] = useState('');
    const [cvv, setCvv] = useState('');

    const handleSubmit = () => {
        console.log('Número:', numero);
        console.log('Nome:', nome);
        console.log('Validade:', validade);
        console.log('CVV:', cvv);
        // Você pode adicionar aqui a lógica para enviar os dados do cartão para o backend, por exemplo.
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
                        <Icon name="user" size={24} color="black" />
                        <Text style={styles.buttonText}>Perfil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Cartão')}>
                        <Icon name="credit-card" size={24} color="blue" />
                        <Text style={[styles.buttonText, { color: 'blue' }]}>Cartão</Text>
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

                
                <Image
                    source={require('../assets/card.png')}
                    style={{ width: 300, height: 300, marginLeft: 50 }}
                />

                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>   
                    <View style={styles.container}>
                        <Text style={styles.title}>Cadastro do Cartão</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Número do Cartão"
                            value={numero}
                            onChangeText={setNumero}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Nome do Titular"
                            value={nome}
                            onChangeText={setNome}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Validade (MM/YY)"
                            value={validade}
                            onChangeText={setValidade}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="CVV"
                            secureTextEntry={true}
                            value={cvv}
                            onChangeText={setCvv}
                        />
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.buttonSend}>Cadastrar</Text>
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
        paddingBottom: 200,
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

export default Card;
