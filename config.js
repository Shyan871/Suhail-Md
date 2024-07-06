const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Peshawar,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/JryJfifwJWNL038eDBX2py";
global.website=process.env.GURL || "https://chat.whatsapp.com/JryJfifwJWNL038eDBX2py" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923140529832";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923140529832,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_30_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTksXG4gICAgICAgIDY3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDM4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA3LFxuICAgICAgICAxMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyLFxuICAgICAgICA1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQxLFxuICAgICAgICAxOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYzLFxuICAgICAgICA1NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAzMyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDUxLFxuICAgICAgICAzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZRVFEY0JEblBPd2xEMGt6SWdkMGgwU2l4R2ZBUXNUSjh3c1N4YUN1ak40PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiYm92Si1nWFNhYVh6cDN0YTlpZVJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImYzNTZlNDBiLTc3N2UtNGI3YS1hYTIyLTdhYzE4Yjk0NTRmZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDIzMyxcbiAgICAgIDYwLFxuICAgICAgNjIsXG4gICAgICAzOCxcbiAgICAgIDI5LFxuICAgICAgMTgsXG4gICAgICAxNTMsXG4gICAgICAxMjEsXG4gICAgICA0OCxcbiAgICAgIDc1LFxuICAgICAgMTIsXG4gICAgICAyMzgsXG4gICAgICAxODYsXG4gICAgICAyMDYsXG4gICAgICAyNTQsXG4gICAgICAyMjMsXG4gICAgICA5OCxcbiAgICAgIDM2LFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OSxcbiAgICAgIDk5LFxuICAgICAgMjE3LFxuICAgICAgNyxcbiAgICAgIDczLFxuICAgICAgNzMsXG4gICAgICAxMDgsXG4gICAgICAyMDMsXG4gICAgICAxMDMsXG4gICAgICAyNDAsXG4gICAgICAxNDEsXG4gICAgICAyNDEsXG4gICAgICAxMjgsXG4gICAgICAxMDEsXG4gICAgICAxMixcbiAgICAgIDIwNSxcbiAgICAgIDIzOCxcbiAgICAgIDI1MCxcbiAgICAgIDM1LFxuICAgICAgMTIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZHN1lTTkJZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNDA1Mjk4MzI6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNzUzNjY3OTA3NzA2OjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ096VzhjUUNFUENRbzdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK1N1SU9MVjZBb0JsMGV2eitMbkhUYnlGcFpOUjNPTWNwblpqaVZNd3J4OD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoenVDbmtFem1DVlhHb2k3RVZQRkpwN2M4dm1ta3BCL292K05ycjFhL0I1WTV5ZGpNL0NzR1QzMVBrVTVBS2lOd1h3Tm4wL0I2bWg0T0JKYUQ4YjNCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnU3RFaVRoWEhFdmNHTjUxdnkvV2JZQmk4V2VjdUhGZ3dQdmFKY09Zd08rTWlGQnVOR0JYUzVrNXd1M056QndjNi9zeWd6bWpBb2N4UHhwZEVyRTBBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNDA1Mjk4MzI6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjQwMjQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTEh6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMSHouanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ShaYan",
  packname: process.env.PACK_NAME || "SHaYan",
  botname : process.env.BOT_NAME  || "SHaYan-AFriDi",
  ownername:process.env.OWNER_NAME|| "SHaYan-AFriDi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
