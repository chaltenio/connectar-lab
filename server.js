const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const connectar = express();

connectar.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

connectar.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

