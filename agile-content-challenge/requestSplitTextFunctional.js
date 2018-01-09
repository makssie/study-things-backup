var http = require('http');
var fs = require('fs');

download('http://s3.amazonaws.com/uux-itaas-static/minha-cdn-logs/input-01.txt', './output.csv');

var date = new Date();
var formattedDate = ("0" + date.getDate()).substr(-2) + "/" +
  ("0" + (date.getMonth() + 1)).substr(-2) + "/" + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

const header = `#Version: 1.0
#Date: ${formattedDate}
#Fields: provider http-method status-code uri-path time-taken response-size cache-status`;

function download(url, dest) {
  http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      const brokenEnterText = chunk.trim().split('\n').map((obj) => {
        return obj.trim().split('|');
      });
      const returnObj = generateText(brokenEnterText);
      fs.writeFileSync(dest, returnObj);
    });
  });
}

function generateText(brokenEnterText) {
  const arrangedString = brokenEnterText.map((unit) => {
    const cut = unit.splice(3, 1).toString().split(' ');
    const concated = unit.concat(cut);
    return `"MINHA CDN" ${concated[4].replace(/"/g, '')} ${concated[1]} ${concated[5]} ${Math.round(concated[3])} ${concated[0]} ${concated[2]}`;
  });
  const finalString = arrangedString.map((obj) => {
    return "\r" + obj;
  }).toString().replace(/,/g, '');

  const finalResult = header.concat(finalString);

  return finalResult;
}