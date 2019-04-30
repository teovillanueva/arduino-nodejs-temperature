const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const path = require('path');

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM3', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

// Read the port data
// port.on("open", () => {
//   console.log('serial port open');
// });


io.on('connection', (socket) => {
    parser.on('data', data =>{

        socket.emit("temp", `${data} C°`)
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

server.listen(3000, () => {
    console.log("Listening on port 3000");
})