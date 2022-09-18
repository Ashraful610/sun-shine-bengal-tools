import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCLs4Vl5RR-IbJiHGC8WWlpJUD_EjFjXRo",
  authDomain: "sun-shine-bengal-tools.firebaseapp.com",
  projectId: "sun-shine-bengal-tools",
  storageBucket: "sun-shine-bengal-tools.appspot.com",
  messagingSenderId: "813334485922",
  appId: "1:813334485922:web:99da3583058b387cfcb0fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth