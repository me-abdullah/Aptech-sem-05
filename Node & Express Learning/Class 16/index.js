const express = require('express');
const fs = require('fs');
const app = express();
let users = require('./data.json'); // Load users from data.json

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Get all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Get, Update, and Delete a user by ID
app.route('/api/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    })
    .patch((req, res) => {
        const id = Number(req.params.id);
        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex === -1) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update user details
        const updatedUser = { ...users[userIndex], ...req.body };
        users[userIndex] = updatedUser;

        // Write changes to data.json
        fs.writeFile('./data.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to update user' });
            }
            res.json({ status: 'success', user: updatedUser });
        });
    })
    .delete((req, res) => {
        const id = Number(req.params.id);
        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex === -1) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Remove the user
        users.splice(userIndex, 1);

        // Write changes to data.json
        fs.writeFile('./data.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to delete user' });
            }
            res.json({ status: 'success', message: 'User deleted successfully' });
        });
    });

// Add a new user
app.post('/api/users', (req, res) => {
    const body = req.body;

    // Add new user with a unique ID
    const newUser = { ...body, id: users.length > 0 ? users[users.length - 1].id + 1 : 1 };
    users.push(newUser);

    // Write changes to data.json
    fs.writeFile('./data.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to add user' });
        }
        res.json({ status: 'success', id: newUser.id, user: newUser });
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
