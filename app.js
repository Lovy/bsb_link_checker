require('events').EventEmitter.prototype._maxListeners = 500;
var crawler = require("js-crawler");

new crawler().configure({
depth:3,
shouldCrawl: function(url) {
    return url.indexOf("yahoo.com") > 0;
  }
})
.crawl("http://yahoo.com",
function onSuccess(page){
console.log("CHECKING....."+page.url);
},function(response){
console.log("DEAD LINK FOUND...."+response.url + "STATUS..." + response.status);

});

