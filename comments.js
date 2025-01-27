// Create Web Server
// Create Web Server
// 1. Create a Web Server
// 2. Handle Post Request
// 3. Handle Get Request
// 4. Handle Put Request
// 5. Handle Delete Request

// 1. Create a Web Server
// 2. Handle Post Request
// 3. Handle Get Request
// 4. Handle Put Request
// 5. Handle Delete Request

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');

app.use(bodyParser.json());

const comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
];

// 3. Handle Get Request
app.get('/comments', (req, res) => {
    res.send(comments);
});

// 2. Handle Post Request
app.post('/comments', (req, res) => {
    const newComment = {
        id: uuid(),
        username: req.body.username,
        comment: req.body.comment
    };
    comments.push(newComment);
    res.send(newComment);
});

// 4. Handle Put Request
app.put('/comments/:id', (req, res) => {
    const foundComment = comments.find(comment => comment.id === req.params.id);

    if (foundComment) {
        foundComment.username = req.body.username;
        foundComment.comment = req.body.comment;
        res.send(foundComment);
    } else {
        res.send('Comment not found');
    }
});

// 5. Handle Delete Request
app.delete('/comments/:id', (req, res) => {
    const index = comments.findIndex(comment => comment.id === req.params.id);

    if (index > -1) {
        comments.splice(index, 1);
        res.send('Comment deleted');
    } else {
        res.send('Comment not found');
    }
});

// 1. Create a Web Server
app.listen(3000
