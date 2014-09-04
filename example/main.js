var work = require('../');

var w = work(require('./worker.js'));
w.addEventListener('message', function (ev) {
    console.log(ev.data);
});

//passing data
w.postMessage(4);
