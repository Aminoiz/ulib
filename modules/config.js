const path = require('path');

module.exports = {
    port : process.env.PORT || 8080,
    secret : '&=L^XHy!MPw2e**#KAk3R@SMFT3nK+QGN2YkZkcaPPptEky4*PjhD@AaNz++*2Jr',
    path : {
        app : {
            transform : path.resolve('./modules/transforms/appApi'),
            controller : path.resolve('./modules/controllers/appApi'),
        },
        model : path.resolve('./modules/models'),
    }
}
