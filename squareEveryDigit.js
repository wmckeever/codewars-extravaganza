/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer 

- we need to first turn it into a string so that we can get an index. 

- square each individual number
- concatanate the number so there is no spaces 

*/


function squareDigits(num){

  //numbers = num.split(" "); // also converts to a string
  num = String(num); // converts  a number to a string
  
  let newString = ""; // has to be an empty string
  
  // or num = num + ""; -- converts to an empty string

  for(let i = 0; i < num.length; i++){
    newString += Number(num[i]) ** 2; // += concats the string
  
  }

  return Number(newString);
}
console.log(squareDigits(9119));
