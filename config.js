//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "pierrejacquesfeddly@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/50931461936 , https://wa.me/221787415670";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "221787415670";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEcyeG9ZRnhrV3hIOU1jQmJTNEJRREczbUtocEZWMExibGVwdEc4WFRYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWVHVWlJSjJabERoejlpL2prZ3p4MlJUV1ZlWTluMFRtYSsxdk1Wak9qMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTk1BeEhiR2VtZVdndURkRlQxUkZhUUJGaGdjR3ltR003V1kwVHhvVjNVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsZnF2LzJvNDdTcDhVTnFDcVB5MlphRmVMTVduTVZ5Z2Z0STAya2dBS3hnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFJbWcxdHZodkQ5VFBvU1kvTlNMQXlFa200NVFjdW16by9USmlMNlZuMlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkF3MXVHdzFHaUVFT3lBZDFBNWZiVDdMM2k0b2tLcHZMMVp1MU5PVmNRVjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkZHMnRmQ1Rya2RWVG1TSDBOdURFNnpCeEt5Sm5YZWVhWUQxM2x0QXRXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1pCRGN6cS9pQ0tKdnQxRUNaVUtVT2JpUlMxdnBFZFFwY3JubEQvRVhEQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNDSnNnNnhZWENpcG9UOWtmbnJ3cjg5cjgwNlZkMlRlaVlZM3Y5OThwZGlIQ1dHSVBVeGFZbFJsQ0ZEd3NHcm5CKzUyZXhPanFoTXpyOHhKOXFmS2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYsImFkdlNlY3JldEtleSI6IlhjejlJNi81c21aV3M3M1BkaElLRWJ4TDVkdjNXZ1hhbllPU3V1N3VnQ009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjIxNzg3NDE1NjcwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkEzMzJFNERDNkQyN0JBMzk1RjkyQzgwQzQzNDQyMkExIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDE1OTMwMDh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IngwUEphQWdJU3FxUDlDQmF3QlE5N2ciLCJwaG9uZUlkIjoiNWNkMjg4NjMtMzJlMi00NWMyLWI1ZTktNWQyODYwNzRkMmYzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJLZE9LNTVXcGRacXRBNkZzSmYrVzc4UGxzQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXOTZMOUdMcTJqQkNzQU1DdzNsUWJaZWNPVE09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTERLQUJFNVMiLCJtZSI6eyJpZCI6IjIyMTc4NzQxNTY3MDoxMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZqJ8J2ZvvCdmbrwnZqC8J2aiV/wnZm68J2ZuPCdmbvwnZm78J2ZtPCdmoEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xQbSt6NFFvTE82dmdZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijh4RVVuZXpEMzBUK2ZSZ0xoRHI3VldBQ1IvOWRGMFJpdWVrVlh4dWMrU1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImR6a3RSWGhFSHJvdXdJUE1pM1JzMHFBQTBWT0RHUzFQZnhRdzdwK1RGNkRPdUh6NVpjTnd6Z3c3S1VUS21JWWl6VzJ0eG1HZ0JGY21sS3ZoQU1rNEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvbG1WNmVTdjZMQ2QvbkdEb2J2dEUycUV0ZGtuTmFwOHM0UWUwZVh6dGJLRjNTc2tkanlaL3lOaGgxemJyeXhveFVMS0VhbG1IUXhENDVMUzZrc3BpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyMTc4NzQxNTY3MDoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmTVJGSjNzdzk5RS9uMFlDNFE2KzFWZ0FrZi9YUmRFWXJucEZWOGJuUGttIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQxNTkzMDA1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZiMCJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "F",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "𝑭𝑬𝑫𝑫𝑳𝒀-𝑴𝑫",
  botname: process.env.BOT_NAME || "ST┘𝑭𝑬𝑫𝑫𝑳𝒀-𝑴𝑫𖤐",
  ownername: process.env.OWNER_NAME || "🌹⃟⃢👑@𝑳𝑷𝑯𝑨🌹⃟⃢👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
