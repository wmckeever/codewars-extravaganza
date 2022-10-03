/*

This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

- capitalize the first letter of the index
- add # of lowercase letters to match index number
capitalLetter + (lowerCaseLetter * indexNumber)
- need a loop to where we are replicating this pattern

'abcd' -example
function(s){
for(let i = 0; i < s.length; i++){


  }
}

*/



function accum(s) {
	let newStr = "";

  for(let i = 0; i < s.length; i++){
newStr += s[i].toUpperCase();

for (let n = 0; n < i; n++){
  newStr += s[i].toLowerCase(); // we start adding lowercase characters
  }
newStr += "-"; // add the dash between character

}
return newStr.slice(0,-1);
}
console.log(accum('abcd'));