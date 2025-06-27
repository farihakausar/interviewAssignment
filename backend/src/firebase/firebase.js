const admin = require("firebase-admin");

const serviceAccount = require("./pickme-il-firebase-adminsdk-fbsvc-52ef1d71e8.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const messaging = admin.messaging;

module.exports = { messaging };
