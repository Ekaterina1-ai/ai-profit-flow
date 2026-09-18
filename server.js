import http from 'http';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const PORT = 3001;

const server = http.createServer(async (req, res) => {
  // Включаем CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Обработка preflight запроса
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/api/send-application') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        const { name, phone, service } = data;

        if (!name || !phone) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Name and phone are required' }));
          return;
        }

        const botToken = process.env.VITE_TELEGRAM_BOT_TOKEN;
        const chatId = process.env.VITE_TELEGRAM_CHAT_ID;

        console.log('Bot Token:', botToken ? '✓ заполнен' : '✗ не заполнен');
        console.log('Chat ID:', chatId ? '✓ заполнен' : '✗ не заполнен');
        console.log('Получена заявка:', { name, phone, service });

        if (!botToken || !chatId) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Bot token or chat ID not configured' }));
          return;
        }

        const serviceLine = service ? `\n🛠 Услуга: ${service}` : '';
        const message = `📋 Новая заявка с сайта\n\n👤 Имя: ${name}\n📱 Телефон: ${phone}${serviceLine}`;

        const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        });

        const telegramData = await telegramResponse.json();

        console.log('Telegram ответ:', telegramResponse.status, telegramData);

        if (telegramResponse.ok) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, message: 'Application sent successfully' }));
        } else {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: telegramData.description || 'Failed to send message' }));
        }
      } catch (error) {
        console.error('Server error:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/send-application`);
});

