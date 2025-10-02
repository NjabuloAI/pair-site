const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Dml_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("@whiskeysockets/baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function DML_TECH_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Dml_Tech = Dml_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                browser: Browsers.macOS('Chrome')
             });
             if(!Pair_Code_By_Dml_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Dml_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Dml_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Dml_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(50000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(8000);
               let b64data = Buffer.from(data).toString('base64');
               let AUDIO_URL = "https://files.catbox.moe/hhw2a6.mp3"; // New audio URL
               let img = "https://files.catbox.moe/cvd9sb.jpg";
               let session = await Pair_Code_By_Dml_Tech.sendMessage(Pair_Code_By_Dml_Tech.user.id, { 
                   text: b64data,
                  }, { quoted: {
                     key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: "njᥲbᥙᥣo",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=26777821911:+26777821911\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });

               let fana = ` ɴᴊᴀʙᴜʟᴏ_ᴊʙ-ᴡᴀʙᴏᴛ sᴇssɪᴏɴ ᴄᴏɴɴᴇᴄᴛᴇᴅ*
━━━━━━━━━━━━━━━━━━━━━

⚡ *sᴛᴀʏ ᴜᴘᴅᴀᴛᴇᴅ!* ⚡
    • *Latest features*
    • *Exclusive updates*
    • *🍥on repo don't forget star and forck*
🔗 » 

━━━━━━━━━━━━━━━━━━━━
`
 await Pair_Code_By_Dml_Tech.sendMessage(Pair_Code_By_Dml_Tech.user.id,{
     text: fana,
 contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterJid: "120363345407274799@newsletter",
      newsletterName: "╭••➤®Njabulo Jb",
      serverMessageId: -1
      },
      forwardingScore: 999,
      ternalAdReply: {
      title: "this season ld work on Njabulo Jb and Alec Jb",
       body: "session working on heroku",
     thumbnailUrl: "https://files.catbox.moe/cvd9sb.jpg",
      sourceUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T",
      mediaType: 1,
      renderLargerThumbnail: true
    },
 },
},{quoted:session})
  await Pair_Code_By_Dml_Tech.sendMessage(Pair_Code_By_Dml_Tech.user.id,{
     audio: { url: AUDIO_URL }, 
     mimetype: 'audio/mp4', 
     ptt: true, // Voice note form
     contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterJid: "120363345407274799@newsletter",
      newsletterName: "╭••➤®Njabulo Jb",
      serverMessageId: -1
      },
      forwardingScore: 999,
      ternalAdReply: {
      title: "this season ld work on Njabulo Jb and Alec Jb",
       body: "session working on heroku",
     thumbnailUrl: "https://files.catbox.moe/cvd9sb.jpg",
      sourceUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T",
      mediaType: 1,
      renderLargerThumbnail: true
    },
 },
},{quoted:session})
          

        await delay(100);
        await Pair_Code_By_Dml_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    DML_TECH_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service is Currently Unavailable"});
         }
        }
    }
    return await DML_TECH_PAIR_CODE()
});
module.exports = router
