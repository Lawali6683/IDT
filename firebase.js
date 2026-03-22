
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";
  

  
  const firebaseConfig = {
    apiKey: "AIzaSyBCi-SBfO3H3UTuWHnfxXxg4Yg5HMpInDA",
    authDomain: "intelligent-836dd.firebaseapp.com",
    databaseURL: "https://intelligent-836dd-default-rtdb.firebaseio.com",
    projectId: "intelligent-836dd",
    storageBucket: "intelligent-836dd.firebasestorage.app",
    messagingSenderId: "23966645688",
    appId: "1:23966645688:web:5a5924b8682466eee8234d",
    measurementId: "G-9GN2YK0VQY"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export { app, analytics, firebaseConfig };
