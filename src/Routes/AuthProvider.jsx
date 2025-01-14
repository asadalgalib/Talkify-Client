import { createContext } from "react";
import { app } from "../Firebase/firebase.init";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app)

    const authInfo = {
        auth
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;