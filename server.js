const express = require('express');
const axios = require('axios');
const app = express();

const client_id = 'G9InEQJQyTofhsmAcdqM'; 
const client_secret = 'MOPqpAcGYr'; 


app.use(express.static('public'));


app.get('/api/blogs', async (req, res) => {
    const query = req.query.query || '제주도 맛집';
    const start = req.query.start || 1;
    const display = 10;
    const api_url = `https://openapi.naver.com/v1/search/blog.json?query=${encodeURI(query)}&start=${start}&display=${display}`;

    try {
        const response = await axios.get(api_url, {
            headers: {
                'X-Naver-Client-Id': client_id,
                'X-Naver-Client-Secret': client_secret,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('블로그 API 호출 오류:', error);
        res.status(500).send('블로그 API 호출 중 문제가 발생했습니다.');
    }
});




const PORT = 3000;
app.listen(PORT, () => {
    console.log(`http://127.0.0.1:${PORT} 서버가 실행 중입니다.`);
});