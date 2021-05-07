const express = require('express');
const app = express();

const users = [
    {
        username: 'john',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'anna',
        password: 'password123member',
        role: 'member'
    }
];

app.listen(3000, () => {
    console.log('Authentication service started on port 3000');
});