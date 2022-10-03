/*
.split() takes everything in a string and turns it into a an array. 

- to solve this we have to hold one number and compare the other numbers to it.

[1,2,3,4,5]

[1]
highest=1
lowest=2

[1,2]
highest=2 - checked to see if to is our highest number = true
lowest=1 - is two the lowest number = false

[1,2,3]
is 3 > than highest?
is 3 < the lowest?

basically make a loop that compares the current highest number to the next and updates if the next number happens to be the highest ?

need: 
- something to keep track of highest set to something already in the array
- something to keep track of lowest set to something already in the array

- for loop
*/

function highAndLow(numbers){

  // don't forget to number cast since you are using a string and it needs to be numbers. 

  let high = Number(numbers[0]); 
  let low = Number(numbers[0]);
  numbers = numbers.split(" "); 
   
    for(let i =0; i < numbers.length; i++){
  
    if(Number(numbers[i]) >= high){
          high = Number(numbers[i]); // set high to array[i] since it's higher
    }if (Number(numbers[i] <= low)){
      low = Number(numbers[i]);
    }
    
   }
    
    
    return high + " " + low;
  
  }

console.log(highAndLow("1 2 3 4 5"));