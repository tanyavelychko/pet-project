const express = require('express')
const app = express()
const port = 5000
const db = {
    users: [
        {
        username: 'user1',
        password: '123456'
        }
    ]
};

const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ 
    extended: true
})); 

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post('/login', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    const checkUser = (user) => {
        if (user.username === username && user.password === password) {
            return true;
        }
    }

    const dbUser = db.users.find((user) => checkUser(user));

    if (dbUser) {
        res.json(dbUser);
    } else {
        res.status(403).json({
            errorMessage: 'Username or password is invalid'
        })
    }
});

app.post('/register', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    const checkUsername = (user) => {
        if (user.username === username) {
            return true;
        }
    }

    const dbUser = db.users.find((user) => checkUsername(user));
    
    if (dbUser) {
        res.status(403).json({
            errorMessage: 'User already exists'
        })
    } else {
        db.users.push({username: username, password: password})
        res.json({
            message: 'User has been registered'
        })
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})