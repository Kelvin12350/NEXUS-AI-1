const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ05LWjZFSmhDcFBmR1A1eFRmNEV0bXgzbTZWNDU0NXhMKzB6cVdHeHlIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzFIajcvMHBVeTk2TXFoNCsvcEdQa25xb3NKbGxtbWRPcWxwVXJyRXl5ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlS2Uyc1VkOTc1QVZsSW8xejhVZE10bUlUYnF0Y0tjdEd1cXN2YWMvREdJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTDBsZTNmQk11YVVnM3NuSU1IV0R2R0lUbDkwMWxZY2pDUmlXelFuTG5ZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNNNHREanpMa2V2cmM3Z1BuWWtmb2hyVkUwNzMyY0FtZTY4Tzg3VnZrMjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxRUmVUTU9SY1ExQTFJNFRBWlZDZU5tNmVqQ1ZBemIzMmZSVU8yRWV4eU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUpVc0ltYkhuMlFLMFpjeGVSWHRRemdtSVpxKzdQTVZwZVRmVDlMTDBHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia05IeHpHZzhvWGhJaW1tSG5LTk0veDhkYyt5cTJhSTVKWDhLam5rOG1IND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklsWERNcmhXUVJkRnNHUkJ0bDVraWk0RktocjNGV0l0Z1FnbzROUWdGNEVRWUg1aUp4WnNTRUhWK3pVVVRCb1hQbDlVS1ROU2lxQzNzVDVRT05raGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ3LCJhZHZTZWNyZXRLZXkiOiJkaVo2VlpmaVQ3VHYxcUpHN0ZteDV2clcvMGNHeElEeC9Udm51L2VTTUo4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMTUwNjg2ODlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUZDMUNDNDY1NEZCOTdGNzY2RDBEQkUyNDU1M0Y1MkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjEwNzUzMH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTExNTA2ODY4OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4QTU1ODA1MUQ1N0Y1RDNBNzU1NzRCNDM0RTM3RTgxQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MTA3NTMxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MTE1MDY4Njg5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdERDY5NzQxRkExNDc4MzQ2OEUzNEIxNDhCQkFGNjg5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYxMDc1NDF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlBHTlRZRE05IiwibWUiOnsiaWQiOiIyMzQ5MTE1MDY4Njg5OjI0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjI1NzY1NTA5NTkxMjQ0OjI0QGxpZCIsIm5hbWUiOiJIIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNUHdpUFFIRVBxbHNNVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ0Nlh3dnRFc0xPbHFCTFp6clBSMEZ0TFdGaWd0REFocDBTbHRNR0VUekg0PSIsImFjY291bnRTaWduYXR1cmUiOiJwMkl6amx3dldiMDlQenJoRFNaU0JPaTduYUNHbXhLSGR5MzdJeWhtdGFXdkQ4cjBOK2dWenZBSlY5bUl5R2NNU3pvUkx1bEV4dW9LMW84YkVaMjBBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTTRkKzJLbnM5NzdKd252RnVXK2hsUm85VTZ5S2dQek9sczRkMTloRDJCOGROK3hubG5oUG1weThCcE5mLytVamxvTmkzZFd6Mk15WGd2OEQ1amJQaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTE1MDY4Njg5OjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJlbDhMN1JMQ3pwYWdTMmM2ejBkQmJTMWhZb0xRd0lhZEVwYlRCaEU4eCsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjEwNzUyOCwibGFzdFByb3BIYXNoIjoiMlAxWWhmIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFWk4ifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY NEXUS-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
GOODBYE: process.env.GOODBYE || "false",
// true if want welcome and goodbye msg in groups       
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.postimg.cc/SR9S0ZdT/11900809-f4ad-46ee-bedf-f430eed4bab8.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "NEXUS-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "NEXUS-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "2542758XXXX",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "officialPkdriller",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ pkdriller*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/SR9S0ZdT/11900809-f4ad-46ee-bedf-f430eed4bab8.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *NEXUS-AI*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "254794146821",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
