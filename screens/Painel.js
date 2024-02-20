import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const Painel = ({ navigation }) => {
    const [activeButton, setActiveButton] = useState('Perfil'); // Definir el estado inicial del botón activo

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
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
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.menuBar}> 
                        <TouchableOpacity
                            style={[styles.button, activeButton === 'Perfil' && styles.activeButton]}
                            onPress={() => handleButtonClick('Perfil')}>
                            <Text style={styles.buttonText}>Perfil</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, activeButton === 'Cartão' && styles.activeButton]}
                            onPress={() => handleButtonClick('Cartão')}>
                            <Text style={styles.buttonText}>Cartão</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, activeButton === 'Veículo' && styles.activeButton]}
                            onPress={() => handleButtonClick('Veículo')}>
                            <Text style={styles.buttonText}>Veículo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, activeButton === 'Tíckets' && styles.activeButton]}
                            onPress={() => handleButtonClick('Tíckets')}>
                            <Text style={styles.buttonText}>Tíckets</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    menuBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#eee',
        paddingVertical: 10,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: 16,
    },
    activeButton: {
        borderBottomWidth: 2,
        borderBottomColor: 'blue',
    },
});

export default Painel;


