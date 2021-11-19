import { useEffect, useState } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from "firebase/auth";

import initializeAuthentication from './../Login/Firebase/firebase.init';


initializeAuthentication()
const useFirebase = () => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState([])
    const auth = getAuth()


    // register an user
    const registerUser = (name, email, password, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
                const newUser = { email, displayName: name }
                setUser(newUser)

                // save user to database
                saveUser(email, name)

                // send name to firebase after creation

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                setAuthError('')
                history.push('/')
            })
            .catch((error) => {
                console.log(error.message);
                setAuthError(error.message)

            })
            .finally(() => setIsLoading(false));
    }


    // login the user
    const signInUser = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);

                setUser(result.user)
                setAuthError('')

            })
            .catch((error) => {
                console.log(error)
                setAuthError(error)
            });
    }

    // currently signed in user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [])

    // sign Out user
    const signOutUser = () => {
        setIsLoading(true)
        signOut(auth).then(() => {

        }).catch((error) => {

        })
            .finally(() => setIsLoading(false));
    }

    console.log(user?.email)
    // check admin
    useEffect(() => {
        fetch(`https://enigmatic-wildwood-60336.herokuapp.com/users/admin/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.admin)
                setAdmin(data.admin)
            })
    }, [user.email])

    // save users to database
    const saveUser = (email, displayName) => {
        const user = { email, displayName }
        fetch('https://enigmatic-wildwood-60336.herokuapp.com/signed/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }
    return {
        user,
        authError,
        registerUser,
        signInUser,
        isLoading,
        signOutUser,
        admin
    }

}

export default useFirebase;