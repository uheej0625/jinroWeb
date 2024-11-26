import express from 'express';
import requestIp from 'request-ip'; // Import the request-ip module

const app = express();

// Middleware to set the client's IP address
app.use(requestIp.mw());

app.get('/get-ip', (req, res) => {
  try {
    const clientIp = req.clientIp; // Get the client's IP address
    res.json({ clientIp });
    console.log(clientIp);
  } catch (error) {
    res.status(500).json({ error: 'IP를 가져올 수 없습니다.' });
  }
});

app.use(express.static('public')); // HTML 파일 제공

// PORT
const PORT = process.env.PORT || 5001;
const listener = app.listen(PORT, '0.0.0.0', () => {
  console.log("Your app is listening on port " + listener.address().port);
});