// interagir com o backend usando WebSocket

var socket = new WebSocket("ws://localhost:8080/ws");

let connect = cb => {
    console.log("Attempting to connect to WebSocket server...");

    socket.onopen = () => {
        console.log("WebSocket connection established.");
    };

    socket.onmessage = msg => {
        console.log(msg)
        cb(msg);
    };

    socket.onclose = event => {
        console.log("socket closed connection:", event);
    };

    socket.onerror = error => {
        console.log("socket error:", error);
    };
};

let sendMsg = msg => {
    console.log("Sending message: ", msg);
    socket.send(msg);
};

export { connect, sendMsg };