const   express = require('express'),
        server = express();

server.listen(5000, () => console.log('Server start on 5000'));

server.all('/', (req, res) => {
    res.write("WOW");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    console.log('Пришел пост запрос на ', req.url);
    // res.sendFile(__dirname + '/public' + 'index.html');
});

server.get('/data', (req, res) => {
    console.log('Пришел');
});
