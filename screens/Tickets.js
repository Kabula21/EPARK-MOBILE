import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Modal, Button } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/FontAwesome';


const Tickets = () => {
    const navigation = useNavigation(); 
    const [tickets, setTickets] = useState([
        { id: 1, title: 'Ticket 1', description: 'Nome: Anderson / Carro: Agile / Placa: OLP-2345 / Horario: 10h às 12h / Dia: 25/03 / Pagamento: Confirmado ' },
        { id: 2, title: 'Ticket 1', description: 'Nome: Gabriel / Carro: Corsa / Placa: OLP-2345 / Horario: 9h às 13h / Dia: 27/03 / Pagamento: Confirmado ' },
        { id: 3, title: 'Ticket 1', description: 'Nome: Leonardo / Carro: Siena / Placa: OLP-2345 / Horario: 10h às 12h / Dia: 25/03 / Pagamento: Confirmado ' },
        { id: 4, title: 'Ticket 1', description: 'Nome: Matheus / Carro: Fusca / Placa: OLP-2345 / Horario: 10h às 12h / Dia: 25/03 / Pagamento: Confirmado' },
    ]);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = (ticket) => {
        setSelectedTicket(ticket);
        setModalVisible(true);
    };

    const closeModal = () => {
        setSelectedTicket(null);
        setModalVisible(false);
    };

    const handlePainel = () => {        
        navigation.navigate('Painel'); 
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
                            onPress={() => openModal(ticket)}>
                            <Text style={styles.cardTitle}>{ticket.title}</Text>
                            <Text>{ticket.description}</Text>
                        </TouchableOpacity>
                    ))}

                   
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={closeModal}
                    >
                        <View style={styles.modalView}>
                            <Text style={styles.modalTitle}>{selectedTicket && selectedTicket.title}</Text>
                            <Text>{selectedTicket && selectedTicket.description}</Text>
                            <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
                            <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
                            <Button title="Fechar" onPress={closeModal} />
                        </View>
                    </Modal>
                </View>
                
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
        marginTop: 50,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 5,
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
        marginTop: 0,
    },

    logoutButton: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: '#eee',
    },
    logoutText: {
        fontSize: 16,
        color: 'black',
    },

    modalView: {
        margin: 20,
        height: 400,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 20
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 25,
    },
});

export default Tickets;
