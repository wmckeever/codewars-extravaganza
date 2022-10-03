
function getCount(str){

  let newStr = "";
  let sum = 0;

  for(i = 0; i < str.length; i++){

      if(str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u"){
      
       
       newStr += str[i];  
       sum = newStr.length;
    } 
  }
  return sum;
}
console.log(getCount("o a kak ushakov lil vo kashu kakao"));