let routes = require('express').Router(),
    path = require('path'),
    fs = require('fs');

routes.get('/', (request, response) => {
    response.set('X-Nintendo-WhiteList', '1|https,wiiu-ssl-static.ubi.com,,6|https,nintendojp.d1.sc.omtrdc.net,,2|https,nintendojp.tt.omtrdc.net,,2|https,admin8.testandtarget.omniture.com,,2|https,www.googletagmanager.com,,2|https,www.google-analytics.com,,2|https,kanzashi-wup.cdn.nintendo.net,,2|https,kanzashi-movie-wup.cdn.nintendo.net,,2|https,kanzashi-qa.wup.shop.nintendo.net,,2|https,kanzashi-movie-qa.wup.shop.nintendo.net,,2'); 

    response.end(fs.readFileSync(path.join(__dirname, 'views/index.html')));
});

routes.get('/message/messages-en_US.xml',  (request, response) => {
    response.set('Content-Type', 'text/xml');

    response.end(fs.readFileSync(path.join(__dirname, 'storage/index.xml')));
});

module.exports = routes;