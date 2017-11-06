const express = require('express')
const app = express()
const cors = require('cors');
const db = require('monk')('localhost:27017/BulletJournal');

const items = require('./routes/items.js');

const sampleData = require('./sample-data.js');

//loadData(sampleData, db);

app.use(function (req, res, next) {
    req.db = db;
    next();
});

const corsOpts = {
    origin : "http://localhost:8080"
}

app.use(cors(corsOpts));

app.use('/items', items);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
      error : err,
      message : err.message
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});


function loadData(data, db) {
    let collection = db.get('items');
    collection.insert(data.items).then( (docs) => {
        console.log("writing");
        console.log(docs);
    }).catch((err) => console.log(err));
    collection.find({}, {}, (err, docs) => {
        console.log('reading');
        console.log(docs);
    });
}
