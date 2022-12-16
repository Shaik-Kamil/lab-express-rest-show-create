const express = require('express');
const log = express.Router();
const logsArray = require('../Models/log');
const { validateURL } = require('../models/validation');
log.get('/', (req, res) => {
  res.json(logsArray);
});

log.post('/', validateURL, (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray[logsArray.length - 1]);
});

log.get('/:index', (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    res.status(200).json(logsArray[index]);
  } else {
    res.redirect('/*');
  }
});

log.delete('/:id', (req, res) => {
  logsArray.pop(req.body);
  res.json(logsArray.at({ index }));
  //   res.json(logsArray.at(-1));
});

module.exports = log;
