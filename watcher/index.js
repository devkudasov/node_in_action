const path = require('path');
const fs = require('fs');
const Watcher = require('./Watcher');

const fromDir = path.join(__dirname, '/from');
const toDir = path.join(__dirname, '/to');

const watcher = new Watcher(fromDir, toDir);

watcher.on('process', file => {
  const watchFile = `${fromDir}/${file}`;
  const processFile = `${toDir}/${file.toLowerCase()}`;
  
  fs.rename(watchFile, processFile, err => {
    if (err) throw err;
  })
});

watcher.start();