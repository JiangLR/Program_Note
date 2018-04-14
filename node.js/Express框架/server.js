const express = require('express');

const server = express();

server.use('/index.html', function (req, res) {
    res.send('abc');        //跟原生的res.write()基本一样
    res.end();
})

server.listen(8080);