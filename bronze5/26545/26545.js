//문제: 26545
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.shift();
  let result = input.reduce((result, curr) => result + +curr, 0);
  console.log(result);
}
