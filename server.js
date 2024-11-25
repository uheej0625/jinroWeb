import express from 'express';
import { publicIpv4 } from 'public-ip';

const app = express();
const PORT = 5001;

app.get('/get-ip', async (req, res) => {
  try {
    const ip = await publicIpv4(); // 사용자의 공인 IP 주소 가져오기
    res.json({ ip });
  } catch (error) {
    res.status(500).json({ error: 'IP를 가져올 수 없습니다.' });
  }
});

app.use(express.static('public')); // HTML 파일 제공

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
