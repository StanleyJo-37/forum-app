import express from 'express';
import Pool from 'pg';

const server = express();
const PORT = process.env.PORT || 5173;

server.listen(PORT, (err) => {
    if (!err) console.log('Server is listening in port', PORT);
});

// const DB_PORT = 5432;
// const pool = new Pool({
//     user: 'root',
//     host: 'localhost',
//     database: [
//         'user',
//         'forum',
//         'comment',
//     ],
//     password: 'root',
//     port: DB_PORT,
// });

// const getAllUsers = (req, res) => {
//     pool.query('SELECT * FROM users ORDER BY id ASC', (err, result) => {
//         if (err) throw err;
//         else result.status(200).json(result.rows);
//     });
// }

// const getUser = (req, res) => {
//     pool.query('SELECT * FROM users WHERE name = $1', [req.name], (err, result) => {
//         if (err) throw err;
//         else result.status(200).json(result.rows);
//     });
// }

// const createNewUser = (req, res) => {
//     const name = req.name;
//     const email = req.email;
    
// }