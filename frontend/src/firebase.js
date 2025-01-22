import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

// Initialise l'authentification avec l'application Firebase
const auth = getAuth(app);  // Passage de l'application ici
const provider = new GoogleAuthProvider();

// Configuration de la fenêtre de sélection de compte
provider.setCustomParameters({
  prompt: 'select_account',
});

// Exporter les instances pour les utiliser dans d'autres fichiers
export { app, storage };
export { auth, provider, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword };
