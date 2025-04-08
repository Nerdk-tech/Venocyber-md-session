const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: nerdk_Tech,    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function TANJIRO_V1_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_nerdk_Tech = Venocyber_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_nerdk_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_nerdk_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_nerdk_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_nerdk_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_nerdk_Tech.sendMessage(Pair_Code_By_nerdk_Tech.user.id, { text: '' + b64data });

               let TANJIRO_V1_TEXT = `
*_Pair Code Connected by nerdk Tech_*
*_Made With 🤍_*
______________________________________
╔════◇
║ *『 WOW YOU CHOOSEN TANJIRO-V1 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚══════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *Ytube:* _https://youtube.com/@nerdktech?si=PZ_b0aVqhmnRmIBw_
║❒ *Owner:* _https://wa.me/+2348054671458_
║❒ *Repo:* _https://github.com/Nerdk-tech/tanjiro-v1_
║❒ *WaGroup:* _https://chat.whatsapp.com/CNYtNFA67ecJ6FZ3sHlLKn_
║❒ *WaChannel:* _https://whatsapp.com/channel/0029VazHPYwBqbr9HjXrc50m_
║❒ *Plugins:* _https://github.com/Kingjux/tanjiro-v1-plugins_
╚══════════════════════╝ 
_____________________________________

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_nerdk_Tech.sendMessage(Pair_Code_By_Venocyber_Tech.user.id,{text: TANJIRO_V1_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Nerdk_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    TANJIRO_V1_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await TANJIRO_V1_PAIR_CODE()
});
module.exports = router
