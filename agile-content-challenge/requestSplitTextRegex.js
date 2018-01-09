var http = require('http');
var fs = require('fs');

download('http://s3.amazonaws.com/uux-itaas-static/minha-cdn-logs/input-01.txt', './output.csv');

var date = new Date();
var formattedDate = ("0" + date.getDate()).substr(-2) + "/" +
  ("0" + (date.getMonth() + 1)).substr(-2) + "/" + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();


const header = `#Version: 1.0
#Date: ${formattedDate}
#Fields: provider http-method status-code uri-path time-taken response-size cache-status`;

const regex = /([0-9]+)\|([0-9]+)\|([a-z]+)\|\"([a-z]+)\s(\S+)\s(\S+)\"\|(.*)/gi;
const replacer = (provider) => (match, p1, p2, p3, p4, p5, p6, p7) => {
  return `"${provider}" ${p4} ${p2} ${p5} ${Math.round(p7)} ${p1} ${p3}`;
};

function download(url, dest) {
  http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      const result = chunk.replace(regex, replacer('MINHA CDN'));
      const finalResult = header.concat(result);
      fs.writeFileSync(dest, finalResult);
    });
  });
}