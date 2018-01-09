function countWords(inputWords) {
    return inputWords.reduce(function(countMap, word) {
      console.log('------------------------------------');
      console.log(countMap[word].length);
      console.log('------------------------------------');
    },{})
}

module.exports = countWords