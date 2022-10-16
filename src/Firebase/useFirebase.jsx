import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContex } from "../Contex/Contex";
import app from "./Firebase.init";



const useFirebase = () => {
    const { setUser } = useContext(AuthContex)
    const [faild, setFaild] = useState('');
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const navigate = useNavigate();

    const googleSigninHandle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setFaild("");
                navigate("/")
            })
            .catch(err => {
                setFaild(err.message)
                console.log(err);
            })
    }

    const githubSignInHandle = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
                navigate("/")
                setFaild('')
            })
            .catch(err => {
                setFaild(err.message)
            })
    }

    const facebookSigninHanlde = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user)
                setFaild('')
            })
            .catch(err => {
                setFaild(err.message)
            })
    }

    const userLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                if (result.user) {
                    setUser(result.user)
                    Swal.fire("Login Successfull", "success")
                }
                else {
                    Swal.fire('Your email is not verified',);
                }
                setFaild('')
            })
            .catch(err => {
                setFaild(err.message)
            })
    }

    const createUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                updateuser(name);
                emailVerify();
                Swal.fire(
                    'Check your email inbox or spam box  and verify',
                );
            })
            .catch(err => {
                setFaild(err.message)
            })
    }
    const updateuser = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
            .catch(err => { console.log(err.message) })
    }

    const emailVerify = () => {
        sendEmailVerification(auth.currentUser)
            .then(res => { })
    }


    useState(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe;
    }, [])


    const resetHandle = (email) => {
        if (email) {
            sendPasswordResetEmail(auth, email)
                .then(result => {
                    Swal.fire('check your email inbox or spam box and set a new password',);
                })
                .catch(err => setFaild(err.message))
        }
        else { alert("Enter your email those password you want to change.") }
    }

    return { googleSigninHandle, faild, setFaild, loading, githubSignInHandle, createUser, resetHandle, userLogin, facebookSigninHanlde }
}

export default useFirebase;