//server.js
let http = require("http");
let port = 9000;

let server = http.createServer(function(request, response) {
    response.setHeader("Content-Type", "text/plain");
    response.writeHead(200);
    //response.end("Hello World from Node");
    response.end(getGreeting());
});

server.listen(port, function() {
    console.log("Server listening on port " + port);
});

//Greeting Function
function getGreeting() {
    let hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
        return "Good morning!";
    } 
    else if (hour >= 12 && hour < 17) {
        return "Good afternoon!";
    } 
    else {
        return "Good evening!";
    }
}

