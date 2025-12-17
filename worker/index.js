export default {
  async fetch(request) {
    if (request.method !== "POST") return new Response("OK");

    const BOT_TOKEN = "YOUR_BOT_TOKEN";
    const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

    const FILE_MAP = {
      "RANDOM_TOKEN_1": "TELEGRAM_FILE_ID_1",
      "RANDOM_TOKEN_2": "TELEGRAM_FILE_ID_2"
    };

    const update = await request.json();
    if (!update.message) return new Response("OK");

    const chatId = update.message.chat.id;
    const text = update.message.text || "";

    if (text.startsWith("/start")) {
      const token = text.split(" ")[1];

      if (FILE_MAP[token]) {
        await fetch(`${TELEGRAM_API}/sendDocument`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            document: FILE_MAP[token],
            protect_content: true
          })
        });
      }
    }

    return new Response("OK");
  }
};
