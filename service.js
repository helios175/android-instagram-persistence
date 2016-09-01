
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

var now = new Date().getTime();

var pictures = [
  'https://scontent-lax.xx.fbcdn.net/v/t1.0-9/1454892_675291165943204_5786179733560918736_n.jpg?oh=c056bd2a5b0fbaab7f98f577eb33026c&oe=5833412A',
  'https://scontent-lax.xx.fbcdn.net/t31.0-8/10687254_675291175943203_4443188462921757375_o.jpg',
  'https://scontent-lax.xx.fbcdn.net/v/t1.0-9/10403699_675291022609885_121817150363952355_n.jpg?oh=5f22a168448c6885c2032d7e061c72aa&oe=57FAF16F'
];

function createPost(i) {
  return {
    "user": {
      "username": "user" + i,
      "profile_picture": pictures[i % pictures.length]
    },
    "created_time": now + i
  };
}

app.get('/media/popular', function (req, res) {
  var data = {
    "data": [
    ]
  };
  for (var i = 0; i < 32; i++) {
    data.data.push(createPost(i));
  }
  res.send(JSON.stringify(data, null, 2));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
