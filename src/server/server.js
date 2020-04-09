var path = require('path');
const express = require('express');
var aylien = require("aylien_textapi");
const mockAPIResponse = require('./mockAPI.js');

// Read env variables
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

if (process.env.API_ID == null || process.env.API_KEY == null) {
  console.log("Env variables not setup correctly, exit program");
  process.exit(1);
}


var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

// textapi.sentiment({
//   'url': 'https://edition.cnn.com/2020/04/08/uk/boris-johnson-coronavirus-wednesday-uk-gbr-intl/index.html',
//   'language': "en",
//   'mode': "text"
// }, function(error, response) {
//   if (error === null) {
//     console.log(response);
//   }
// });


const app = express();

app.use(express.static(path.resolve(__dirname, '../../dist')));

console.log(__dirname);

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve(__dirname,'../../dist/index.html'));
})

// designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port http://localhost:8000!');
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})
