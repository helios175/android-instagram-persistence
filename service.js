
// Run this with node, e.g. `node service.js`
// You probably need to install express via npm

// After that, in InstagramClient.java, change BASE_URL to point to the IPv4 address of your laptop
// Something like:
//
// private static final String BASE_URL = "http://172.24.253.179:3000/";
// private static final String CLIENT_ID = "e05c462ebd86446ea48a5af73769b602";
//

var express = require('express');
var app = express();

var now = (new Date().getTime() / 1000); // Javascript is # of ms from 1970, but we need to return # of secs since 1970

function createPost(i) {
  return {
    "user": {
      "username": "user" + i,
      "profile_picture": "https://dummyimage.com/100x100/000/fff.jpg&text=" + i
    },
    "created_time": now - (i * 3) // the lower the post in the list, the older
  };
}

app.get('/media/popular', function (req, res) {
  var data = {
    "data": [
    ]
  };
  for (var i = 0; i < 32; i++) {
    data.data.push(createPost(i+1));
  }
  res.send(JSON.stringify(data, null, 2));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
