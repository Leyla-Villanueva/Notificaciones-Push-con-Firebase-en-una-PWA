// Importamos las versiones compat de Firebase para SW
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// Configuración igual que en app.js
firebase.initializeApp({
  apiKey: "AIzaSyAUTw31qrKfCWhs2209YgGtkWzRoc_kZ5M",
  authDomain: "pwa-20223tn036.firebaseapp.com",
  projectId: "pwa-20223tn036",
  storageBucket: "pwa-20223tn036.firebasestorage.app",
  messagingSenderId: "246643926707",
  appId: "1:246643926707:web:277d97973439ef040cb2c6"
});

const messaging = firebase.messaging();

// Evento cuando llega un mensaje en segundo plano
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Notificación";
  const options = {
    body: payload.notification?.body || "",
    icon: "/icon-192.png"
  };
  self.registration.showNotification(title, options);
});

// Manejar clics en la notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});