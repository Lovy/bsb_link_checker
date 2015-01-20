*************DEAD LINK CHECKER***************

REQUISITES:
1) Request
2) Underscore
3) Node
 

Supported options:

depth - the depth to which the links from the original page will be crawled. Example: if site1.com contains a link
to site2.com which contains a link to site3.com, depth is 2 and we crawl from site1.com then we will crawl site2.com but will not crawl site3.com as it will be too deep.
The default value is 2.

ignoreRelative - ignore the relative URLs, the relative URLs on the same page will be ignored when crawling,
so /wiki/Quick-Start will not be crawled and https://github.com/explore will be crawled. 
This option can be useful when we are mainly interested in sites to which the current sites refers and 
not just different sections of the original site.
The default value is false.

shouldCrawl - function that specifies whether an url should be crawled, returns true or false.
Example:

var Crawler = require("../crawler.js");

var crawler = new Crawler().configure({
  shouldCrawl: function(url) {
    return url.indexOf("yahoo.com") > 0; //it will crawl only same domains url not external domains
  }
});

crawler.crawl("http://www.yahoo.com/", function(page) {
  console.log(page.url);
});

Default value is a function that always returns true.

HOW TO Configure:
1) Open app.js
2) Enter the url to be crawled
3) Define depth

HOW TO USE
1) Run node app.js