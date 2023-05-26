//문제: 2753
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let year = +input[0];
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    return console.log(1);
  console.log(0);
}
