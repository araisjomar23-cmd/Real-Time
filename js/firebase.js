
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBPjjvrkJkrff8S0x0SW3Dat0J5GzVdXQc",
  authDomain: "realtime-133b0.firebaseapp.com",
  databaseURL: "https://realtime-133b0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "realtime-133b0",
  storageBucket: "realtime-133b0.firebasestorage.app",
  messagingSenderId: "616538094257",
  appId: "1:616538094257:web:64b205e90ad8e4adf48090",
  measurementId: "G-S4G7T3Y0JZ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
