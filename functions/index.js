const { onSchedule } = require("firebase-functions/v2/scheduler");
const admin = require("firebase-admin");
const axios = require("axios");

admin.initializeApp();

const LAT = 28.4325; 
const LON = -16.3644;
const THRESHOLD = 2;

exports.checkElRosarioWeather = onSchedule({
  schedule: "every 15 minutes",
  secrets: ["OPENWEATHER_API_KEY", "TELEGRAM_BOT_TOKEN", "MY_TELEGRAM_CHAT_ID"]
}, async (event) => {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.MY_TELEGRAM_CHAT_ID;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${apiKey}&units=metric`;
    const { data } = await axios.get(url);

    const rainAmount = data.rain ? (data.rain["1h"] || 0) : 0;
    
    const isDanger = rainAmount >= THRESHOLD;

    await admin.firestore().collection("alerts").doc("status").set({
      rainAmount,
      isDanger,
      lastUpdated: admin.firestore.FieldValue.serverTimestamp()
    });

    if (isDanger) {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: `🚨 *BARRANCO ALERT!* \nRain in El Rosario: ${rainAmount}mm/h. \nGo put the wood in!`,
        parse_mode: 'Markdown'
      });
    }
  } catch (error) {
    console.error("Alert System Error:", error);
  }
});