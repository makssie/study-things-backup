
var number = process.openStdin();

console.log('------------------------------------');
console.log('Digite um número');
console.log('------------------------------------');

number.addListener('data', (result) => {
  console.log('The highest siblling number is:',highestSibbling(result));
});

function highestSibbling(number){
  if(number < 0){
    return 'Número negativo';
  }
  const numbersArr = number.toString().split('');
  const result = numbersArr.sort((a,b) => b-a).join('');

  if(result > 100000000){
    return  -1;
  }else{
    return result;
  }
}