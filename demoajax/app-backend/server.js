let http = require("http");

let port = 9000;

let server = http.createServer(

    function (request, response) {

        var referrer = "http://localhost:81";

        response.setHeader('Access-Control-Allow-Origin', referrer);

        var num = Math.random();

        response.end(num.toString());

    }

);

server.listen(port, function() {

    console.log("Server listening on port " + port);

});



