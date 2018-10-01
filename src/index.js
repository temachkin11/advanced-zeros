module.exports = function getZerosCount(number, base) {
  // your implementation 
 
  let count = 0,  i = 0;
  let numbers = [], levelsNumbers = [];
  for (i = 2; i <= base; i++){
    if (!(base % i)){
  
  while (!(base % i)){
    base = base / i;
    count++;
  
  }
  numbers.push(i);
  levelsNumbers.push(count);
  count = 0;
  }
}
let countZeros = [];
for (let i = 0; i < numbers.length; i++){
  let sum = number;
 while (sum / numbers[i]){
  sum = Math.floor(sum / numbers[i]);
  count += sum;

}
count = count / levelsNumbers[i];
countZeros.push(Math.floor(count));
count = 0;
}
countZeros.sort((a, b) => a - b);
return countZeros[0];
}