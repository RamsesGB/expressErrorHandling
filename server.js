const express = require('express');
const path = require('path')

const server = express();

server.get('/download', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath);
})


module.exports = server;