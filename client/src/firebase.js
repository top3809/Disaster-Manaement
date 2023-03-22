import firebase from 'firebase/compat/app'
import { getAuth} from 'firebase/auth'

import 'firebase/compat/auth'
import env from "react-dotenv";

const firebaseConfig = {
    apiKey: "AIzaSyARuSEHu_TIq5afUyEROKr4eP2flqsIP_M",
    authDomain: "wehelp-cb7b9.firebaseapp.com",
    projectId: "wehelp-cb7b9",
    storageBucket: "wehelp-cb7b9.appspot.com",
    messagingSenderId: "762524326162",
    appId: "1:762524326162:web:8370edee065eb3fcfbfbcb",
    measurementId: "G-MLKCZWV9QB"
  };
firebase.initializeApp(firebaseConfig);

export const auth = getAuth();


