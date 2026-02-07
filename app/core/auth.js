import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,sendPasswordResetEmail,
    sendEmailVerification,
    onAuthStateChanged,
} from "firebase/auth";
export async function createAccount(email, password) {
    try{
        const  userCredential=await createUserWithEmailAndPassword(auth,email,password);
        //sending verification mail once account is created 
        await sendEmailVerification(userCredential.user);
        return userCredential.user;
    }catch(error){
        console.log("Signup error:", error.message);
        throw error;
    }
    }
export async function Login(email, password) {
    try{
        const  userCredential=await signInWithEmailAndPassword(auth,email,password);
       
        return userCredential.user;
    }catch(error){
        console.log("Error logging in:", error.message);
        throw error;
    }
    }
    export async function logout(email, password) {
    try{
        await signOut(auth);
        return null;
    }catch(error){
        console.log("Error logging out:", error.message);
        throw error;
    }
    }
    export async function resetPassword(email) {
        try{
            await sendPasswordResetEmail(auth,email);
            return true;
        }catch(error){
            console.log("Error creating account:", error);
            return false;
        }
    }
