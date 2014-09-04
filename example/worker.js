var gamma = require('gamma');

module.exports = function (self) {

    self.addEventListener('message',function(oEvent){
        //reciveing data
        var startNum = parseInt(oEvent.data);



        setInterval(function () {
            var r = startNum / Math.random() - 1;
            self.postMessage([startNum, r, gamma(r) ]);
        }, 500);


    });


};
