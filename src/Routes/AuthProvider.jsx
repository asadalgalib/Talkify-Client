import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth,
GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,
signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user);

    const createUser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = data => {
        return updateProfile(auth.currentUser, data)
    }

    const logInUser = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setUser(null);
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {auth,provider, user,setUser, loading, setLoading, createUser, updateUserProfile,logInUser, logOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;