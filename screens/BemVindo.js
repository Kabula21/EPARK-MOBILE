import { View, Text, Pressable, ImageBackground, Image } from 'react-native';
import React from 'react';
import Button from '../components/Button';


const BemVindo = ({ navigation }) => {

    

    return (
        <ImageBackground
            source={require('../assets/background.png')}
            style={{
                flex: 1,
                resizeMode: 'cover',
                justifyContent: 'center', 
                alignItems: 'center',
                marginTop:50 
            }}
        >
            
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require('../assets/epark.png')} 
                    style={{ width: 220, height: 300, marginBottom: 0 }}
                />
                <Text style={{ color: 'black', fontSize: 24, marginBottom: 50 }}>Bem Vindo ao Epark</Text> 

                <Button
                    title="Iniciar"
                    onPress={() => navigation.navigate("Login")}
                    style={{
                        marginTop: 20,
                        backgroundColor: '#191970',
                        
                    }}
                />
                <View style={{ flexDirection: 'row', marginTop: 40 }}>
                    <Text style={{ color: 'black' }}>Não Possui Conta ainda? </Text>
                    <Pressable onPress={() => navigation.navigate("Cadastro")}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Criar Conta</Text>
                    </Pressable>
                </View>
                
                <Text style={{ color: 'black', marginTop: 150 }}>powered by TTG-Group </Text>
                
            </View>
        </ImageBackground>
    );
}

export default BemVindo;


