import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Modal, Button, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import QRCode from 'react-native-qrcode-svg';



const Tickets = () => {
    const navigation = useNavigation(); 
    const [tickets, setTickets] = useState([
        { id: 1, title: 'Ticket 1', description: 'Nome: Anderson / Carro: Agile / Placa: DDD-999 / Data:  07/04 / Entrada: 17h / Saída: 18h / Pagamento: Confirmado' },
        { id: 2, title: 'Ticket 1', description: 'Nome: Matheus / Carro: Agile / Placa: DDD-999 / Data:  07/04 / Entrada: 17h / Saída: 18h / Pagamento: Confirmado' },
        { id: 3, title: 'Ticket 1', description: 'Nome: Leonardo / Carro: Agile / Placa: DDD-999 / Data:  07/04 / Entrada: 17h / Saída: 18h / Pagamento: Confirmado' },
       
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
                        <Icon name="bars" size={24} color="white" />
                        <Text style={styles.buttonText}>Painel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Perfil')}>
                        <Icon name="user" size={24} color="white" />
                        <Text style={styles.buttonText}>Perfil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Card')}>
                        <Icon name="credit-card" size={24} color="white" />
                        <Text style={styles.buttonText}>Cartão</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Veículo')}>
                        <Icon name="car" size={24} color="white" />
                        <Text style={styles.buttonText}>Veículo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.navigate('Tickets')}>
                        <Icon name="ticket" size={24} color="#F1C40F" />
                        <Text style={styles.activeButton}>Tíckets</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.separator}></View>

                <View style={styles.container}>
                    <Text style={styles.title}>Tickets</Text>
                    {tickets.map(ticket => (
                    <TouchableOpacity
                        key={ticket.id}
                        style={styles.card}
                        onPress={() => openModal(ticket)}>
                        <View style={styles.infoIcon}>
                            <Icon name="info-circle" size={30} color="white" />
                        </View>
                        <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>{ticket.title}</Text>                        
                        <View style={styles.titleLine}></View>
                        <Text>{ticket.description}</Text>
                        <View style={styles.arrowContainer}>
                    <Icon name="arrow-right" size={20} color="#C0C0C0" />
                        </View>                        
                    </View>
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
                            <QRCode
                                value={JSON.stringify(selectedTicket)}
                                size={200}   
                            />
                            {/* Adicionando um espaço */}
                            <View style={{ marginVertical: 10 }} />
                            <Button 
                                title="Fechar" 
                                onPress={closeModal} 
                                color="#191970" 
                            />
                        </View>
                    </Modal>
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
        marginBottom: 250
      
    },
    menuBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#191970',
        paddingVertical: 10,
    },
    menuButton: {
        alignItems: 'center',
    },

    activeButton: {
        borderBottomWidth: 2,
        borderBottomColor: '#F1C40F',
        color: 'white'
    },


    buttonText: {
        fontSize: 12,
        color: 'white'
        
    },
    
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 150,
        color: '#191970'
        
    },

    titleLine: {
        borderBottomColor: '#191970', 
        borderBottomWidth: 4,       
        marginVertical: 5,
                  
    },

    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 30,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderLeftColor: '#191970',
        borderLeftWidth: 40,
    },

    infoIcon: {
        position: 'absolute',
        top: 47,
        left: -32,
        backgroundColor: '#191970',
        borderRadius: 100,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    arrowContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        
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

    modalView: {
        margin:20,
        height: 360,
        backgroundColor: 'white',
        borderRadius: 5,        
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
        marginTop: 20,
        marginBottom: 20,
        color: '#191970'
    },

    

    separator: {
        borderBottomColor: '#00BFFF',
        borderBottomWidth: 10,
        marginVertical: 0,
        marginHorizontal: 0,        
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 100
      },
    
});

export default Tickets;
