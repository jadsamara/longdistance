import { initializeApp } from "@firebase/app";
import { getAuth, getReactNativePersistence } from "@firebase/auth";
import { initializeFirestore } from "@firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5tRO7Lc9JXP08DwCECGyVcdoMRV5zG6U",
  authDomain: "longdistance-760a9.firebaseapp.com",
  projectId: "longdistance-760a9",
  storageBucket: "longdistance-760a9.appspot.com",
  messagingSenderId: "427626735759",
  appId: "1:427626735759:web:3fe67a4d3088a7e38ee8fa",
  measurementId: "G-67FXMTKFDC",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const database = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
