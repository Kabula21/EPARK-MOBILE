import React, { useEffect, useState } from 'react';
import { auth, firebaseApp } from '../../src/firebase.config';
import { collection, getFirestore, getDocs, addDoc, doc, deleteDoc} from 'firebase/firestore';

const useUser = () => {
    const [userMail, setUserMail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userRePass, setUserRePass] = useState('');
    const [userName, setUserName] = useState('');
    const [foto, setFoto] = useState(null);
    const [users, setUsers] = useState([]);

    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, "usuario");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef)
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);

    async function criarUser() {
        const user = await addDoc(userCollectionRef, {
            userName, userPass, userMail
        });
    }

    async function deleteUser(id) {
        const userDoc = doc(db, "usuario", id)
        await deleteDoc(userDoc);
    }

    return {
        userMail,
        setUserMail,
        userPass,
        setUserPass,
        userRePass,
        setUserRePass,
        userName,
        setUserName,
        users,
        foto,
        setFoto,
        criarUser,
        deleteUser
    };
}

export default useUser;
