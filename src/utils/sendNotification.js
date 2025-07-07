const Notification = require("../model/notification.Schema");
require("dotenv").config(); // Load .env variables



exports.sendNotification = async (data) => {
  try {
    const notificationCreated = await Notification.create(data);
    
    const message = {
      notification: {
        title: data?.title || "Default Title",
        body: data?.subTitle || "Default Body",
        image: data?.icon || "Default Body",
      },
      token: "YOUR_FCM_DEVICE_TOKEN_HERE", // Replace or pass dynamically
    };

    // const response = await admin.messaging().send(message);
    return notificationCreated;
  } catch (error) {
    console.error("Error creating notification:", error);
    throw error;
  }
};
