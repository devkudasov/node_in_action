const path = require('path');
const fs = require('fs');
const Watcher = require('./Watcher');
const renameDir = path.join(__dirname, '/rename');

const watcher = new Watcher(__dirname, renameDir);

watcher.on('process', file => {
  const watchFile = `${watchDir}/${file}`;
  const processFile = `${renameDir}/${file.toLowerCase()}`;
  
  fs.rename(watchFile, processFile, err => {
    if (err) throw err;
  })
});

watcher.start();