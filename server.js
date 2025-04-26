const express = require('express');
const mongoose = require('mongoose');
const serverless = require('serverless-http');
const router = require('./routes/drivers');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};
app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  res.send('Hola, soy el BackEnd de Pedidos de Allrg');
});

app.use('/api/v1/drivers', router);

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
})

.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión:', err));

module.exports.handler = serverless(app);