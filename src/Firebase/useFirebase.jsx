import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContex } from "../App";
import app from "./Firebase.init";


const useFirebase = () => {
    const [dataContex, setdataContex] = useContext(userContex)
    const [faild, setFaild] = useState('')

    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const navigate = useNavigate()

    const googleSigninHandle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setData(result.user);
                setFaild("");
                navigate("/")
            })
            .catch(err => {
                setFaild(err.message)
            })
    }

    const githubSignInHandle = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setData(result.user);
                navigate("/")
            })
            .catch(err => {
                setFaild(err.message)
            })
    }

    const facebookSigninHanlde = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                // const credential = FacebookAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                console.log(result);
            })
            .catch(err => {
                setFaild(err.message)
            })
    }

    const setData = (logInfo) => {
        const prev = { ...dataContex }
        prev.email = logInfo.email;
        prev.name = logInfo.displayName;
        prev.photo = logInfo.photoURL;
        prev.uid = logInfo.uid;
        setdataContex(prev)
    }

    return { googleSigninHandle, faild, githubSignInHandle, facebookSigninHanlde }
}

export default useFirebase;