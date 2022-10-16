import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContex } from "../Contex/Contex";
import app from "./Firebase.init";



const useFirebase = () => {
    const { loading, setLoading } = useContext(AuthContex)
    const [faild, setFaild] = useState('');

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const navigate = useNavigate();

    const googleSigninHandle = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setFaild("");
                navigate(from, { replace: true })
            })
            .catch(err => {
                setFaild(err.message)
                console.log(err);
            })
    }

    const githubSignInHandle = () => {
        setLoading(true)
        signInWithPopup(auth, githubProvider)
            .then(result => {
                navigate(from, { replace: true })
                setFaild('')
            })
            .catch(err => {
                setFaild(err.message)
            })
    }

    const facebookSigninHanlde = () => {
        setLoading(true);
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setFaild('')
                navigate(from, { replace: true })
            })
            .catch(err => {
                setFaild(err.message)
            })
    }

    const userLogin = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                if (result.user) {
                    navigate(from, { replace: true })
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
                navigate("/login")
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