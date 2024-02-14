import * as React from "react"
import Layout from "../components/layout"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDscJMW2fdRiua5VJgZINokmo1C0WHzSiM",
  authDomain: "flowing-thoughts-32988.firebaseapp.com",
  projectId: "flowing-thoughts-32988",
  storageBucket: "flowing-thoughts-32988.appspot.com",
  messagingSenderId: "800339923760",
  appId: "1:800339923760:web:72737770f092280e47aef5",
  measurementId: "G-9NP7MBWMYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const HomePage = () => {
  
  return (
    <Layout>
      <p>Welp for now, there is nothing to read yet?
        
      </p>
    </Layout>
  )
}

export const Head = () => <title>CNB Blog</title>

export default HomePage
