const path = require('path');

module.exports = {
    port : 8080,
    secret : '&=L^XHy!MPw2e**#KAk3R@SMFT3nK+QGN2YkZkcaPPptEky4*PjhD@AaNz++*2Jr',
    path : {
        app : {
            transform : path.resolve('./transforms/appApi'),
            controller : path.resolve('./controllers/appApi'),
        },
        model : path.resolve('./models'),
    }
}
