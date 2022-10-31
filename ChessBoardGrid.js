//My solution to Eloquent Javascript Third Edition Chapter Two Chessboard Exercise
//First javascript "Program" ever
//Based on the number you provide for each prompt it will design a chessboard of that many lines that are the same in width, basic pattern making.

let numLength = prompt("How many rows should we create on grid?");
let numWidth = prompt("How many columns should the grid have?")
//good practice is to check if user input are numbers, ignore for now but in a bigegr more important program you alert user that they need to input numbers and prompt them again until they get it right
let strGrid = '';
let tempStart = '';
let strLine = ''
for(let curOfTotal = 0; curOfTotal < (numLength); curOfTotal += 1) {
  for(let curOfLine = 0; curOfLine <= numWidth; curOfLine += 1) {
    if(curOfLine == numWidth){
      strGrid += strLine;
      strLine = '';
      break;
    }

    if(curOfLine == 0 && curOfTotal == 0){
      strLine += ' ';
      tempStart = ' ';
      continue;
    } else if(curOfLine == 0 && curOfTotal != 0) {
      if(tempStart == ' ') {
        strLine += '#';
        tempStart = '#';
      } else {
        strLine += ' ';
        tempStart = ' ';
      }
      continue;
    }

    if(curOfLine != 0) {
      if(strLine[curOfLine - 1] == '#') {
        strLine += ' ';
      } else {
        strLine += '#';
      }
    }
    
  }//end inner loop
  strGrid += "\n"
}
console.log(strGrid);
