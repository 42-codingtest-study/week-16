//문제: 10172
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  console.log("|\\_/|");
  console.log("|q p|   /}");
  console.log('( 0 )"""\\');
  console.log('|"^"`    |');
  console.log("||_/=\\\\__|");
}
