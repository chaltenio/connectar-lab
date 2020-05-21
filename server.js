const express = require('express');

const connectar = express();

connectar.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

connectar.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

