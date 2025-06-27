const { messaging } = require("../firebase");
const sendNotification = (registrationTokens, title, body) => {
  return new Promise((resolve, reject) => {
    const apns = {
      payload: {
        aps: {
          contentAvailable: true,
        },
      },
      headers: {
        "apns-push-type": "background",
        "apns-priority": "5",
        "apns-topic": "",
      },
    };

    const data = {
      notifee: JSON.stringify({
        title,
        body,
        android: { channelId: "default" },
      }),
    };

    const message = {
      data,
      apns,
      tokens: registrationTokens,
    };

    messaging()
      .sendEachForMulticast(message)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

module.exports = sendNotification;
