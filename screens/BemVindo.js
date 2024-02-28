import React, { useState } from 'react';
import { View, Text, Pressable, ImageBackground, Image, ActivityIndicator, StyleSheet } from 'react-native';
import Button from '../components/Button';

const BemVindo = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonPress = () => {
        setIsLoading(true);

        // Simulando uma operação assíncrona, por exemplo, uma requisição à API
        setTimeout(() => {
            setIsLoading(false);
            navigation.navigate("Login");
        }, 2000); // Tempo de simulação: 2 segundos
    };

    return (
        <ImageBackground
            source={require('../assets/background.png')}
            style={{
                flex: 1,
                resizeMode: 'cover',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 50
            }}
        >

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require('../assets/epark.png')}
                    style={{ width: 220, height: 300, marginBottom: 0 }}
                />
                <Text style={{ color: 'black', fontSize: 24, marginBottom: 50 }}>Bem Vindo ao Epark</Text>

                <Button
                    title={isLoading ? "Carregando..." : "Iniciar"}
                    onPress={handleButtonPress}
                    style={{
                        marginTop: 20,
                        backgroundColor: '#191970',
                        height: 50

                    }}
                />

                <Text style={{ color: 'black', marginTop: 150, marginLeft: 0 }}>powered by TTG-Group </Text>

                {isLoading && (
                    <View style={styles.activityIndicatorContainer}>
                        <ActivityIndicator size="large" color="#191970" />
                    </View>
                )}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    activityIndicatorContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BemVindo;
