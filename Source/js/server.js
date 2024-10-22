const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { error } = require('console');
const app = express();

// Налаштування body-parser для обробки POST-запитів
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware для обробки JSON
app.use(express.json());

app.get('/', (res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.post("/api/submit", (req, res) => {
    try{
        console.log("Received form data:", req.body);
        if (req.body.consent) {
            const formData = {
                name: req.body.name,
                email: req.body.email,
                question: req.body.question
            };

            const jsonData = JSON.stringify(formData, null, 2);

            const filePath = path.join(__dirname, '..', 'data', 'users.json');

            fs.appendFile(filePath, jsonData + ',\n', (err) => {
                if (err) {
                    console.error('Error writing to file', err);
                    return res.status(500).send('Server Error');
                }
                res.send('Data saved successfully');
            });
        } else {
            res.status(400).send('You have to give consent to data processing!');
            throw new Error("No consent given!");
        }
    } catch (e) {
        console.error(e);
        res.status(500).send('An error occurred on the server.');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
