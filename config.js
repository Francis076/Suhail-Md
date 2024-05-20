const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349122205290";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_16_05_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxLFxuICAgICAgICA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDgsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgODgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNixcbiAgICAgICAgMjE2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDQwLFxuICAgICAgICAzNCxcbiAgICAgICAgNSxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDksXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzksXG4gICAgICAgIDQzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NixcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM0LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODEsXG4gICAgICAgIDU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDU4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0LFxuICAgICAgICA1NixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDExLFxuICAgICAgICAxMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTExLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidzZQVjBBMk1zVkFMTG9wTnMzdW1uVEs1elQxWnBzTlBBd3BjMk5KWXJYcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTIyMjA1MjkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwRjkxNzgwNDJCQkI1OEIwNEUxRTRGREJGRjJCNUYzQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTYyMTgxNThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieE02U0NVN2tUZ3loQlVRbkFxVFNLd1wiLFxuICBcInBob25lSWRcIjogXCI3NGRmODVlMC0xOWZlLTQ1OTUtYjlhNy05NWYyYzJjZWI4YWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjExLFxuICAgICAgMjE1LFxuICAgICAgODAsXG4gICAgICA3MixcbiAgICAgIDE5NCxcbiAgICAgIDI0OCxcbiAgICAgIDI0NixcbiAgICAgIDI2LFxuICAgICAgNjMsXG4gICAgICAxOTYsXG4gICAgICAyMDcsXG4gICAgICAxNzMsXG4gICAgICAxNzEsXG4gICAgICAyNTEsXG4gICAgICAxLFxuICAgICAgMjEsXG4gICAgICAwLFxuICAgICAgMTIzLFxuICAgICAgMjM3LFxuICAgICAgMjI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcwLFxuICAgICAgODQsXG4gICAgICAyOSxcbiAgICAgIDExOSxcbiAgICAgIDE2NCxcbiAgICAgIDk5LFxuICAgICAgOTMsXG4gICAgICAyMzUsXG4gICAgICAyNDUsXG4gICAgICA1MyxcbiAgICAgIDIzNCxcbiAgICAgIDExNyxcbiAgICAgIDM3LFxuICAgICAgMTYsXG4gICAgICAyMjIsXG4gICAgICA4NSxcbiAgICAgIDIyNSxcbiAgICAgIDEzMyxcbiAgICAgIDIwNSxcbiAgICAgIDEwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKRUFKVDk4QlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyMjIwNTI5MDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRW1hbnVlbFwiLFxuICAgIFwibGlkXCI6IFwiMjE0Mzc0OTA0MDAwNjI1OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1hTcDk0SEVLYlNyYklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvZ0luUW5rdWE4WGdSTWFyUVpBdUpWRzBKSHB2eU45L2lNVFZ2QkFyUFFnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlloSVQ4b0I0QkNaK3ArVXdXbjdKSWR3blpmSmwxUlBCaVZDeWNCUVI0V3RjUHlpQ1NULzAyR3J5OHhGTDZyMy9MRkllZ0RrMHB6SDVFLzlSS0tRWEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlE5TXhqWmJ3UEtsTDE0ZjJnaGpCdzFnM0xTZTZiZ0hOWmI5a2VXdnF0ZmxCZWVDM2RtL2hqckF5WVdWQ0pMWUJYMmZmRHZEVVQzNGJSMTl6OHpOd2pRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjIyMDUyOTA6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2MjE4MTU0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVFVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJUVUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2YjhOekthL3g5czhyV3hOQUdEUitxbG1CSnE5UDVVSWJwRHcrRTkvVm9JPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNzY4MzAwNTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjIxODE1ODA2MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Official",
  ownername:process.env.OWNER_NAME|| "Official",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
