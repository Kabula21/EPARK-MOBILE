import React, { useState, useEffect} from 'react';
import { View, Text, Pressable, ImageBackground, Image, ActivityIndicator, TouchableOpacity, StyleSheet, StatusBar, Platform, NativeModules } from 'react-native';
import Button from '../components/Button';

const BemVindo = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonPress = () => {
        setIsLoading(true);
        
        setTimeout(() => {
            setIsLoading(false);
            navigation.navigate("Login");
        }, 1000); 
    };

    const [statusBarStyle, setStatusBarStyle] = useState('light-content');
    const [navBarColor, setNavBarColor] = useState('#000'); 

    useEffect(() => {
      if (Platform.OS === 'android') {        
        const contrastColor = calculateContrastColor(navBarColor);
        setStatusBarStyle(contrastColor === 'light' ? 'dark-content' : 'light-content');
      }
    }, [navBarColor]);

    const handleStatusBarPress = () => {     
      setNavBarColor(navBarColor === '#000' ? '#FFF' : '#000');
    };

    const calculateContrastColor = (color) => {
      return color === '#000' ? 'dark' : 'light';
    };

    return (
        
        <ImageBackground
            source={require('../assets/background.png')}
            style={{
                flex: 1,
                resizeMode: 'cover',
                justifyContent: 'center',
                             
        
            }}
        >
        <TouchableOpacity onPress={handleStatusBarPress}>
        <StatusBar
          barStyle={statusBarStyle}
          translucent={true}
          backgroundColor="transparent"
        />
      </TouchableOpacity>
                   
                   
                
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Image source={require('../assets/epark.png')} style={style.image}/>

                <Text style={{ color: 'white', fontSize: 24, marginBottom: 50 }}>Bem Vindo ao <Text style={{ fontWeight: 'bold', color: "#F1C40F" }}>EPARK</Text></Text>

                <Text style={{ color: 'white', fontSize: 15, marginBottom: 50, justifyContent: 'center', textAlign: 'center' }}>
                    Entre ou crie sua conta para começar{"\n"}a utilizar os nossos serviços</Text>

                <Button
                    title={isLoading ? "Carregando..." : "Iniciar"}
                    onPress={handleButtonPress}
                    style={{
                        marginTop: 10,
                        backgroundColor: '#F1C40F',
                        height: 52

                    }}
                />

                <Text style={{ color: 'white', marginTop: 120, marginLeft: 0 }}>powered by TTG-Group </Text>                

                {isLoading && (
                    <View style={styles.activityIndicatorContainer}>
                        <ActivityIndicator size="large" color="#F1C40F" />
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
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
});

const style = StyleSheet.create({
    image: {
      width: 230,
      height: 300,
      marginTop: 50,
      shadowColor: '#fff',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
  });

export default BemVindo;
