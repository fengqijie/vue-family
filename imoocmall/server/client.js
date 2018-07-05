var https = require('https');
var util = require('util');

https.get('https://www.cecpark.net/raas/v1/park/list?listType=1&pageIndex=1&pageSize=6', function(res) {
    let data = '';
    res.on("data", function(chunk) {
        data += chunk;
    });
    res.on("end", function() {
        let result = JSON.parse(data);

        console.log("result:" + util.inspect(result));
    })
})