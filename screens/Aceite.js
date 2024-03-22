import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet, StatusBar, Platform, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Aceite = () => {    
    const navigation = useNavigation();  
    const [statusBarStyle, setStatusBarStyle] = useState('light-content');
    const [navBarColor, setNavBarColor] = useState('#000'); 

    useEffect(() => {
        if (Platform.OS === 'android') {        
            const contrastColor = calculateContrastColor(navBarColor);
            setStatusBarStyle(contrastColor === 'dark' ? 'dark-content' : 'light-content');
        }
    }, [navBarColor]);

    const handleStatusBarPress = () => {     
        setNavBarColor(navBarColor === '#000' ? '#FFF' : '#000');
    };

    const calculateContrastColor = (color) => {
        return color === '#000' ? 'dark' : 'light';
    };

    const handlePainel = () => {        
        navigation.navigate('Cadastro'); 
    };

    return (  
        <ImageBackground            
            style={{
                flex: 1,                
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
            

            <SafeAreaView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.texto}>
            <Icon name="exclamation-triangle" size={100} color="red" />{"\n\n"}
            <Text style={styles.bold}>Termos de Uso do Aplicativo</Text>{"\n\n"}                        
            Bem-vindo ao nosso aplicativo de estacionamento! Antes de começar a utilizar nossos serviços, por favor, leia atentamente os seguintes termos de uso. Ao utilizar nosso aplicativo, você concorda em obedecer a estes termos e condições. Se você não concorda com algum destes termos, por favor, não continue a utilizar o aplicativo.{"\n"}
            
            <Text style={styles.bold}>Serviços Oferecidos</Text>{"\n"}
            Nosso aplicativo oferece serviços de reserva de vagas de estacionamento em estabelecimentos parceiros. Nós não somos responsáveis pela disponibilidade das vagas ou pela gestão dos estacionamentos.{"\n\n"}
            
            <Text style={styles.bold}>Uso Adequado:</Text>{"\n"}
            Você concorda em utilizar nosso aplicativo somente para os fins pretendidos, ou seja, para reservar vagas de estacionamento em locais autorizados.{"\n\n"}

            <Text style={styles.bold}>Cadastro e Segurança:</Text>{"\n"}
            Ao se cadastrar em nosso aplicativo, você concorda em fornecer informações precisas e completas. Você é responsável por manter a segurança de suas credenciais de login e por qualquer atividade que ocorra em sua conta.{"\n\n"}

            <Text style={styles.bold}>Reservas e Pagamentos:</Text>{"\n"}
            As reservas de vagas de estacionamento estão sujeitas à disponibilidade. O pagamento das reservas é de sua responsabilidade e deve ser realizado conforme as opções disponíveis no aplicativo.{"\n\n"}

            <Text style={styles.bold}>Cancelamentos e Reembolsos:</Text>{"\n"}
            Cancelamentos de reservas podem estar sujeitos a políticas específicas de cada estacionamento. Qualquer reembolso estará sujeito aos termos e condições estabelecidos no momento da reserva.{"\n\n"}

            <Text style={styles.bold}>Responsabilidades do Usuário:</Text>{"\n"}
            Você é responsável por qualquer dano causado ao estacionamento, veículos ou a terceiros enquanto estiver utilizando nossos serviços.{"\n\n"}

            <Text style={styles.bold}>Alterações nos Termos de Uso:</Text>{"\n"}
            Reservamo-nos o direito de alterar estes termos de uso a qualquer momento. Alterações entrarão em vigor imediatamente após sua publicação no aplicativo.{"\n\n"}
         <Text style={styles.bold}>Obrigado por utilizar nosso aplicativo de estacionamento!</Text>{"\n"}

            
        </Text> 
    </View>
    </ScrollView>
    
            </TouchableWithoutFeedback>
                <TouchableOpacity style={styles.logoutButton} onPress={handlePainel}>
                    <Icon name="sign-out" size={24} color="black" />
                    <Text style={styles.logoutText}>Voltar</Text>
                </TouchableOpacity> 
                </SafeAreaView>
           
        </ImageBackground>
    );
};

const styles = StyleSheet.create({   
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 16,
        marginBottom: 20,
        paddingHorizontal: 20,
        textAlign: 'left',
    },
    bold: {
        fontWeight: 'bold',
        color: '#191970'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    logoutButton: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        backgroundColor: '#DCDCDC',
        flexDirection: 'row',
    },
    logoutText: {
        marginLeft: 5,
        fontSize: 16,
        color: 'black',
    },
});

export default Aceite;
