import express from 'express';
import { publicIpv4 } from 'public-ip';

const app = express();

app.get('/get-ip', async (req, res) => {
  try {
    const ip = await publicIpv4(); // 사용자의 공인 IP 주소 가져오기
    res.json({ ip });
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