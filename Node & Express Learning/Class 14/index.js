const express = require('express');
const app = express();
const users = require('./data.json');

// app.get('/users', function (req, res) {
//     const html = `
//       <ul>${users.map((user) => `<li>${user.first_name}</li>`).join('')}</ul>
//     `;
//     res.send(html);
//   });

app.get('/api/users', (req, res) => {
    res.json(users);
});
app.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
})
    .patch((req, res) => { })
    .delete((req, res) => { });

app.post('/api/users', (req, res) => {
    //res.json(users);
});
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
