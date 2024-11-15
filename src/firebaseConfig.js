// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2nGZ7uJjIYgs7ECBchUVFQ9uoEh-hXlU",
  authDomain: "crudusers-9a321.firebaseapp.com",
  projectId: "crudusers-9a321",
  storageBucket: "crudusers-9a321.firebasestorage.app",
  messagingSenderId: "657004182806",
  appId: "1:657004182806:web:dc503a5952461f1f6b2437"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Corrección
const db = getFirestore(app);

/* Opción A */
export default app

/* Opción B */
export { db }

/* Explicación: 
export { db }: Exporta específicamente la instancia de Firestore configurada (db). Es útil cuando solo necesitas exportar una parte específica de la configuración o funcionalidad.
export default app: Exporta la instancia principal de la aplicación Firebase (app). Esto puede ser útil si necesitas utilizar app para otras configuraciones o inicializaciones de Firebase, además de Firestore. 
Se pueden usar juntas y debiera funcionar de todas formas.
*/
