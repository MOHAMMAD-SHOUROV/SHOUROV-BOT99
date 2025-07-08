just removed 1 attachment.

Content: /cmd install boss.js  module.exports = {
 config: {
	 name: "boss",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "boss") {
 return message.reply({
 body: "     「সাইডে চাপ বস আসছে 😎\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝐊𝐈𝐍𝐆 𝐒𝐇𝐎𝐔𝐑𝐎𝐕」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/SvITp6D.mp4")
 });
 }
 }
}