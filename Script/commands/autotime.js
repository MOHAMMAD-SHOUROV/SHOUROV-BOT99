// Module configuration
module.exports.config = {
  name: 'autotime',
  version: '10.02',
  hasPermssion: 0x0, // No permission required
  credits: '𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 𝑻𝑬𝑨𝑴_☢️', // Bot credits
  description: 'সেট করা সময় অনুযায়ী গ্রুপ এ আসরিয়ভাবে বার্তাগুলি পাঠানো হবে!', // Description: Sends messages automatically based on set times
  commandCategory: 'group message', // Category for the command
  usages: '[]', // No specific usage syntax
  cooldowns: 0x3 // 3-second cooldown
};

// Array of messages with timers
const messages = [
  { timer: '12:00:00 AM', message: ['__এখন রাত ১২টা বেজে গেলো সবাই ঘুমায় গেছো 😾😾\x0a\x0a𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '1:00:00 AM', message: ['__এখন রাত ১টা বাজে, এখন আসরের আযান দিতাসে ,আমি শুধু জেনারেল মানুষ chrome bot'] },
  { timer: '2:00:00 AM', message: ['__এখন রাত ২টা বাজে, কেউ খেলা মাঠে যাও😻\x0a\x0a𝗜𝘀𝗹𝗮𝗺𝗶�_c𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '3:00:00 AM', message: ['__এখন রাত ৩টা বাজে, সবাই আড্ডা ও দিতাসে😛\x0a\x0a𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '4:00:00 AM', message: ['__এখন ভোর ৪টা বাজে, সবাই প্রেম করে বাই কি শুয়ে আসে🤭🤭\x0a\x0a𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '5:00:00 AM', message: ['__এখন ভোর ৫টা বাজে, সবাই বাসর ঘরে😶\x0a\x0a𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '6:00:00 AM', message: ['__এখন সকাল ৬টা বাজে,এখন ফজরের আযান দিতাসে ,আমার বউ নাই🥺😩\x0a\x0a𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '7:00:00 AM', message: ['__এখন সকাল ৭টা বাজে, সবাই ঘুম থেকে উঠো সবাই,আজ নামাজ পড়ে নাও😍.\x0a\x0a𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 �_c𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '8:00:00 AM', message: ['__এখন সকাল ৮টা বাজে,সবাই দাত মাজ নাও🤗🤗\x0a\x0a𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '9:00:00 AM', message: ['__এখন সকাল ৯টা বাজে, সবাই স্কুল-কলেজ এর জন্য পড়তে বসো সবাই🙂\x0a\x0a𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '10:00:00 AM', message: ['__এখন সকাল ১০টা বাজে, সবাই কিছু খেয়ে নাও🤗\x0a\x0a𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '11:00:00 AM', message: ['__এখন সকাল ১১টা বাজে,বাচ্চাদের স্কুল শুটিং হয়ে গেসে🤗❤️\x0a\x0a𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '12:00:00 PM', message: ['__এখন দুপুর ১২টা বাজে,সবাই দুপুরের খাবার খেয়ে নাও😍.\x0a\x0a𝗜𝘸𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '1:00:00 PM', message: ['__এখন দুপুর ১টা বাজে, সবাই নামাজ পড়ে নাও😒\x0a\x0a𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '2:00:00 PM', message: ['__এখন দুপুর ২টা বাজে, কিছু মানুষ কাজ হয়ে গেলো😒🤟\x0a\x0a𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '3:00:00 PM', message: ['__এখন বিকাল ৩টা বাজে, সবাই আড্ডা দিলে, সবাই নামাজ পড়ে নিও 🥀\x0a\x0a𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '4:00:00 PM', message: ['__এখন বিকাল ৪টা বাজে,এখন আসরের সময় হইসে, নামাজ পড়ে নাও😒😊\x0a\x0a𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '5:00:00 PM', message: ['__এখন বিকাল ৫টা বাজে, কিছু মানুষ ধুলা করলে সবাই নামাজ পড়ে নিও🥺\x0a\x0a𝗜𝘀𝗹�_a𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '6:00:00 PM', message: ['__এখন সন্ধ্যা ৬টা বাজে, সবাই মন দিয়ে কাজ করে তারা জানাই নামাজ পড়ে নাও😒\x0a\x0a𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '7:00:00 PM', message: ['__এখন সন্ধ্যা ৭টা বাজে, কিছু মানুষ বাই মনে হয় মাঠে যাও😻\x0a\x0a𝗜𝘸𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '8:00:00 PM', message: ['__এখন রাত ৮টা বাজে, এখন এশারের আযান দিতাসে ,আমি পারি না🥺😩কিছু মানুষ গোসল করে নাও🤗❤️\x0a\x0a𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '9:00:00 PM', message: ['__এখন রাত ৯টা বাজে, সবাই কিছু খেয়ে নাও🤗❤️\x0a\x0a𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '10:00:00 PM', message: ['__এখন রাত ১০টা বাজে, কিছু কিছু মানুষ ঘুমায়😑আজ ও পড়াশোনা করো সবাই🙂\x0a\x0a𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁'] },
  { timer: '11:00:00 PM', message: ['__এখন রাত ১১টা বাজে, কিছু মানুষ প্রেম করে বাই নামাজ পড়ে নাও😍.\x0a\x0a𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵�_a𝘁 𝗯𝗼𝘁'] }
];

// Function to select a random message from an array
const getRandomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)];

// Function to run on load
module.exports.onLoad = (api) => {
  setInterval(() => {
    // Get current time in the desired format (e.g., "12:00:00 AM")
    const currentTime = new Date(Date.now() + (-0x3fd9 * 0x4f5 + 0x8f4554 - 0x387d * 0x155)).toLocaleString().split(/,/)[0].trim();
    
    // Find message that matches the current time
    const matchedMessage = messages.find(item => item.timer === currentTime);
    
    if (matchedMessage) {
      // Send the random message to all threads
      global.data.allThreadID.forEach(threadID => api.sendMessage(getRandomMessage(matchedMessage.message), threadID));
    }
  }, 1000); // Check every second
};

// Placeholder function for the run command
module.exports.run = () => {};