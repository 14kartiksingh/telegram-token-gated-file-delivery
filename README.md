# Telegram Token-Gated File Delivery System

A secure, serverless file delivery system built using **Telegram Bot API** and **Cloudflare Workers**.  
Files are stored in **private Telegram channels** and delivered only through **unguessable, token-based deep links**, ensuring controlled access without traditional servers.

---

## 🚀 Features

- 🔐 Token-gated access using Telegram deep links
- 📦 Files stored in **private Telegram channels** (hidden storage)
- ⚡ Serverless backend using **Cloudflare Workers**
- 🆓 Free & 24×7 availability (no VPS, no database)
- ♻️ Reuse files via Telegram `file_id` (no re-uploading)
- 🌐 Works with a simple static website

---

## 🧠 How It Works

1. Files are uploaded to a **private Telegram channel**
2. Each file is mapped to a **random, unguessable token**
3. A user clicks a link like:
https://t.me/your_bot?start=<TOKEN>
4. Telegram sends `/start <TOKEN>` to the bot
5. The Cloudflare Worker validates the token
6. The bot sends the corresponding file to the user

> The private channel remains completely hidden from users.

---

## 🛠 Tech Stack

- **Telegram Bot API**
- **Cloudflare Workers (JavaScript)**
- **HTML** (static site for link distribution)

---

## 📂 Project Structure

worker/ → Cloudflare Worker (Telegram bot logic)
site/ → Static website with download links


---

## 🎥 Demo

A short demo video/GIF is included to demonstrate the workflow.  
Live access is intentionally restricted for security reasons.

---

## 🔒 Security Notes

- Tokens are random and unguessable
- File names are never exposed to users
- Private channel prevents public visibility of files
- `protect_content` can be enabled to reduce forwarding

> This system focuses on **controlled access**, not DRM.

---

## 🧪 Use Cases

- Private file sharing among friends or teams
- Controlled distribution of resources
- Lightweight content delivery without servers
- Learning project for serverless & API-based architecture

---

## 📌 Disclaimer

This project is for educational and personal use.  
Ensure you have the right to distribute any content shared using this system.

---


