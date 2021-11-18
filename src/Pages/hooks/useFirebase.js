import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const googleSignIn = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                const errorMessage = error.message;
                console.log(error);
                setError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    };

    // create user  with email and password

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleName = e => {
        setName(e.target.value);
    };

    const handleEmail = e => {
        setEmail(e.target.value);
    };

    const handlePassword = e => {
        setPassword(e.target.value);
    };

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name }).then(() => { });
    };

    const registerUser = () => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setUserName();
                console.log(user);
            })
            .finally(() => setIsLoading(false));
    };

    const signInWithEmailPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;

                setUser(user);
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage);
            });
    };
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, []);

    // google sign out
    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    };

    return {
        user,
        error,
        name,
        handleName,
        userSignOut,
        handleEmail,
        handlePassword,
        registerUser,
        error,
        signInWithEmailPassword,
        googleSignIn,
        isLoading,
    };
};

export default useFirebase;