// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIq4Gc24hJdMAuKcR3DmU-H3R4bo3-x9E",
    authDomain: "ema-shop-commerce.firebaseapp.com",
    projectId: "ema-shop-commerce",
    storageBucket: "ema-shop-commerce.appspot.com",
    messagingSenderId: "394541664754",
    appId: "1:394541664754:web:4fe92292cf71b39085436b",
    measurementId: "G-DS7NGF44GB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;