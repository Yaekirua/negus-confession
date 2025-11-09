const express = require('express');
const mysql = require('mysql2');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const UAParser = require('ua-parser-js'); // <--- Add this line

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'waja9006',
    database: 'confession_db',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    db.query('SELECT * FROM confessions ORDER BY created_at DESC', (err, results) => {
        if (err) throw err;
        res.render('index', { confessions: results });
    });
});

app.post('/confess', (req, res) => {
    const message = req.body.message;

    // Detect device brand
    const userAgent = req.headers['user-agent'];
    const parser = new UAParser(userAgent);
    const device = parser.getDevice();
    const brand = device.vendor || 'Unknown';

    db.query(
        'INSERT INTO confessions (message, device_brand) VALUES (?, ?)',
        [message, brand],
        (err, results) => {
            if (err) throw err;
            io.emit('newConfession');
            res.redirect('/');
        }
    );
});

io.on('connection', (socket) => {
    console.log('New user connected');
});

server.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
