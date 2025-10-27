import makeWASocket from "@whiskeysockets/baileys"
import express from "express"

const app = express()
app.get("/", (req, res) => res.send("Bot ON ✅"))
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log("HTTP Server Running ✔"))

// --- BOT ----
async function start() {
  const sock = makeWASocket({ printQRInTerminal: true })
  sock.ev.on("connection.update", (update) => {
    if(update.qr) console.log("SCAN QR 🔥🔥")
  })
}
start()
