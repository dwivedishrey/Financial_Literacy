import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDLHKjJ3vfnaOxABK-5OS8YCYZDYca-2Rs",
  authDomain: "financialliteracy-33625.firebaseapp.com",
  projectId: "financialliteracy-33625",
  storageBucket: "financialliteracy-33625.appspot.com",
  messagingSenderId: "713649636541",
  appId: "1:713649636541:web:ab0d9c999c52dc7364e3d4",
  measurementId: "G-PEEX53DTN4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app); 
export default auth;