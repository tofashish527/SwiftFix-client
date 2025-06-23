import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase.init';

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(null);
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const logOut=()=>
    {
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
          const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
            //
          })
          return()=>{
            unsubscribe();
          }
    },[])
  
    const authInfo={
        createUser,loading,loginUser,setLoading,user,logOut,signInWithGoogle
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;