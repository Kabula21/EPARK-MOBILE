import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/FontAwesome';


const Tickets = () => {
    const navigation = useNavigation(); 
    const [tickets, setTickets] = useState([
        { id: 1, title: 'Reserva 1', description: 'Description for Ticket 1' },
        { id: 2, title: 'Reserva 2', description: 'Description for Ticket 2' },
        { id: 3, title: 'Reserva 3', description: 'Description for Ticket 3' },
        { id: 4, title: 'Reserva 4', description: 'Description for Ticket 4' },
    ]);

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
                        <Icon name="ticket" size={24} color="blue" />
                        <Text style={styles.buttonText}>Tíckets</Text>
                    </TouchableOpacity>
                </View>   

                <View style={styles.container}>
                    <Text style={styles.title}>Tickets</Text>
                    {tickets.map(ticket => (
                        <TouchableOpacity
                            key={ticket.id}
                            style={styles.card}
                            onPress={() => console.log(`Clicked on ${ticket.title}`)}>
                            <Text style={styles.cardTitle}>{ticket.title}</Text>
                            <Text>{ticket.description}</Text>
                            
                        </TouchableOpacity>
                    ))}
                </View>

            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 150,
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
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        width: '80%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default Tickets;
