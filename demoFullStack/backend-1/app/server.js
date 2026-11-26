let http = require("http");
let port = 9000;

function findUnique(numbers) {
    return [...new Set(numbers)];
}

let server = http.createServer(function(request, response) {

    let url = new URL(request.url, "http://localhost");

    if (url.pathname === "/api/unique") {

        let input = url.searchParams.get("numbers");

        if (!input || input.trim() === "") {
            response.writeHead(400, {
                "Content-Type": "application/json"
            });

            response.end(JSON.stringify({
                error: "Please enter numbers"
            }));

            return;
        }

        let numbers = input.split(",").map(Number);

        if (numbers.some(number => !Number.isFinite(number))) {
            response.writeHead(400, {
                "Content-Type": "application/json"
            });

            response.end(JSON.stringify({
                error: "Please enter valid numbers"
            }));

            return;
        }

        let uniqueNumbers = findUnique(numbers);

        response.writeHead(200, {
            "Content-Type": "application/json"
        });

        response.end(JSON.stringify({
            uniqueNumbers: uniqueNumbers
        }));

    } else {

        response.writeHead(404);
        response.end("Not Found");

    }

});

server.listen(port, "0.0.0.0", function() {
    console.log("Server listening on port " + port);
});
