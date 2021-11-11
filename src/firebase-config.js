import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxx",
    projectId: "xxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxxxx",
    appId: "xxxxxxxxxxx",
    measurementId: "xxxxxxxxxxxxx",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);