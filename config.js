const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="kenocheenoche@gmail.com"
global.location="Nakuru,kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "available" 
global.blockJids= process.env.BLOCK_JID || "available"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nakuru";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://photos.app.goo.gl/CbhqrFAV4op7mbgK9" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "true";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+254726044290";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "enable", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://photos.app.goo.gl/CbhqrFAV4op7mbgK9" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_37_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MCxcbiAgICAgICAgMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxODksXG4gICAgICAgIDg0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2LFxuICAgICAgICA0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOSxcbiAgICAgICAgMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDUxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA3MixcbiAgICAgICAgOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI3LFxuICAgICAgICA5MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDM4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM2LFxuICAgICAgICA5NixcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsSWl3UUNVNHZTNmJ0UHFZbUUvQy9lZ2JWN3dMMjlvbFVuWUxaNkFTVGhrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzczFacVZxbVJ2U2c3R3FKU1JJRFVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM3OWZiZGRhLWMzYmYtNDBjNy05N2UwLTk2ZTkxYTQzZTQxNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODYsXG4gICAgICAyMDEsXG4gICAgICAxNDIsXG4gICAgICAxMjgsXG4gICAgICAxODYsXG4gICAgICAyLFxuICAgICAgMTgsXG4gICAgICAxMDksXG4gICAgICAxMSxcbiAgICAgIDY5LFxuICAgICAgODYsXG4gICAgICAxNjQsXG4gICAgICAyMzksXG4gICAgICAxNTAsXG4gICAgICAxMTMsXG4gICAgICAyNTEsXG4gICAgICA0NSxcbiAgICAgIDEzOCxcbiAgICAgIDExOCxcbiAgICAgIDEwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NCxcbiAgICAgIDExMSxcbiAgICAgIDE5NCxcbiAgICAgIDEwOSxcbiAgICAgIDIyMSxcbiAgICAgIDg4LFxuICAgICAgMTQsXG4gICAgICAxNTcsXG4gICAgICAyMjMsXG4gICAgICAxMTUsXG4gICAgICA0MCxcbiAgICAgIDEsXG4gICAgICAxNSxcbiAgICAgIDU3LFxuICAgICAgODUsXG4gICAgICA0NSxcbiAgICAgIDIxNyxcbiAgICAgIDE2OSxcbiAgICAgIDY3LFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVXQURBOFFXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MjYwNDQyOTA6NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0ODU0NTk0OTA0OTA1Njo2NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZXVwTDhERUtIQjVyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9SMjYyNHI2TGkxNksxZXk5QkhlLzVhOEJLU0ZQRWRUK0FjSmJLeG9EUUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQjBoY1h3K1p6QWZuMS94MmZOQjJjOEh4WkVNcWg2bGpIUEhaMWN4a2Y5S3VyNThrNGszK2M4QmV5ZlJVbXpRK2dRaEUrSFpTZ1R1L1lGUlE3TTF4Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQWhSemkvTC9kQ1k1TTFtNnBkZW15a0U5MVg3enJFaktDbnBXS3hGU2VtNEJpbkx0YVZ5QnJORG1LZmtxUWQzU2YrVkFtVlR3Q2hSaDl0UjZJRGR1aUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzI2MDQ0MjkwOjY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MjQ3MDEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSlhUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKWFQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUSzNVelN1UUVPRllUaWU1dVN2RGNFcm1lbDUyMWNBRWVacEhrZzc4bXVJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkzODAyMjcxNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "nocher",
  packname: process.env.PACK_NAME || "nocher",
  botname : process.env.BOT_NAME  || "kenoche",
  ownername:process.env.OWNER_NAME|| "kenoche",


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
  //style : process.env.STYLE || "4",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
