const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0x1T2xDVWFCQSszZEhRRnU4RUdMZXVyZ215aHBTaHZXWWNTVDZzbk9rUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmJJOCtzRE9PbmtrbzZIY2k1ellRTEVKV3N4bHJSenE3dk9IUVVFWjBDRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSnpjb1c5UDNDUk5LMkJyNUF3aG9DN0o4Umw0bVdyQTIyYm5sMjdnOG1jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlY0RNRWFhT3Q0T2JYYkgraXpNaGo4OUkyWkVYdWYyWExsMUhOMC8ybFJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNMWjU5NFp0dmU1YjBzMU9nSEt4S3g0Z3YxRjkydFkxSGd3UHRXd0JiRXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNsV3E2cnZkNWdPbWI3THFBR2hLRWV5TmJ6Z1NCTWpYeE9WQnNnSUVlQ1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0MxWkk0b2I5RnUzNm1vNzBONjc4WGUrcDl6WlpCeVpWOVM3L2Y2NmxHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmtTZ2IwbHRYMEsyNXFLMUsvN2x6UTlkSXVueHVtckJHeXVFb2I2ckp6dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijh2MXY3THFCT3k4U2J2WHBmK21wa1A2ZXlWL0JYdnQxcGRIcGxTVi9jc3AzWFZQRnEwT1h0V0JPOVowSmtsOFh5YVBQQWNWa0gzNUtESGVyRi91c0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODMsImFkdlNlY3JldEtleSI6InBJRHZpc28wWTRxYTRCeHB6OVA1RnBLejU4SldnNGNIaGxtbCtnQkd0bG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODEzMTY0NDA0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBOTFERjY3RjExMzA2REU0QTgwMDE5NEFCRkM4MUU3OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2NDU1NDA1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MTMxNjQ0MDQzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjREODlBOTZBRUFDRDI2RUNFRjgwNTdEQkY5QkM5QkE1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY0NTU0MDZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMzE2NDQwNDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjU3RUM1Q0I5N0QxQkI5QkYzNjJBQjhDOERDNkMwOEEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjQ1NTQwNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiMURGVDI3SlAiLCJtZSI6eyJpZCI6IjIzNDgxMzE2NDQwNDM6OEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjgxOTk2Nzk3OTk0OTk6OEBsaWQiLCJuYW1lIjoiZGlhbndpbHNvbjE0NSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHpvNmJVRUVON0R4Y1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVVRUZnZqeEZnNVlZejRScVdhQ0tuRmlxM3JUMlBJdkdONDZZdXZOZVVFMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUG5QRU54NkYwZ1pEbjNBTkpmWEJpUkcxMWY5cVAxRVd6N3BxbVd0S3ZkbEIzVXQ0clh6ek0yWFJCaEk2KzgvOThtMENaVmcwcllUNy94cUxyN2MxRFE9PSIsImRldmljZVNpZ25hdHVyZSI6Ijc0TW5aWU5RYVI4UGdWQnJZUHJDcjJROGMzc0ZHWHNuNXpRa2VMcVZONkhwdE9aaGV1WnB3NnpBOWdEZitUVEIzbzFHb0JJenBwQ1ROT0k5RkltSkJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEzMTY0NDA0Mzo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZFMDM3NDhSWU9XR00rRWFsbWdpcHhZcXQ2MDlqeUx4amVPbUxyelhsQk4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjQ1NTQwMywibGFzdFByb3BIYXNoIjoiMlAxWWhmIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOODAifQ==",
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
