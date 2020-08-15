var fs = require('fs');
var https = require('https');
fs.writeFile(__dirname + '/ind.html', '<h1>node.js sucks!</h1>', function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('congrats');
    }
});

var npmImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1920px-Npm-logo.svg.png'

https.get(npmImg,function(response){
    response.pipe(fs.createWriteStream(__dirname + '/npm.jpg'))
})