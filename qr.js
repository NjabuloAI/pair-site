const PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const { makeid } = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Dml_Tech,
    useMultiFileAuthState,
    jidNormalizedUser,
    Browsers,
    delay,
    makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, {
        recursive: true,
        force: true
    })
};
const {
    readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
    const id = makeid();
    async function DML_TECH_QR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id)
        try {
            let Qr_Code_By_Dml_Tech = Dml_Tech({
                auth: state,
                printQRInTerminal: false,
                logger: pino({
                    level: "silent"
                }),
                browser: Browsers.macOS("Desktop"),
            });

            Qr_Code_By_Dml_Tech.ev.on('creds.update', saveCreds)
            Qr_Code_By_Dml_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect,
                    qr
                } = s;
                if (qr) await res.end(await QRCode.toBuffer(qr));
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    await delay(800);
                    let b64data = Buffer.from(data).toString('base64');
                    let session = await Qr_Code_By_Dml_Tech.sendMessage(Qr_Code_By_Dml_Tech.user.id, { 
						text: b64data
					       }, { quoted: {
                            key: {
                            fromMe: false,
                             participant: `0@s.whatsapp.net`,
                        remoteJid: "status@broadcast"
                      },
            message: {
                contactMessage: {
                    displayName: "Njabulo AI",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=26777821911:+26777821911\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });

                    let fana = `
🚀 WELCOME TO DML-TECH 🚀

╭═══════◇◆◇═══════╮
💎 Elite • Active • Strong
🍃 Pure & Consistent Flow 🌊
╰═══════◇◆◇═══════╯


📢 Join Our Channel:
👉 Click Here https://whatsapp.com/channel/0029Vb2hoPpDZ4Lb3mSkVI3C

💡 Inside you’ll find:
✅ Deployment Guides
✅ Repository Access
✅ Tips & Updates
`
    await Qr_Code_By_Dml_Tech.sendMessage(Qr_Code_By_Dml_Tech.user.id, { 
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
}, { quoted: session })
await Qr_Code_By_Dml_Tech.
 sendMessage(Qr_Code_By_Dml_Tech.user.id,{
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
                    await Qr_Code_By_Dml_Tech.ws.close();
                    return await removeFile("temp/" + id);
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    DML_TECH_QR_CODE();
                }
            });
        } catch (err) {
            if (!res.headersSent) {
                await res.json({
                    code: "Service is Currently Unavailable"
                });
            }
            console.log(err);
            await removeFile("temp/" + id);
        }
    }
    return await DML_TECH_QR_CODE()
});
module.exports = router
