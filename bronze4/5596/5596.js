//문제: 5596
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let a = input[0]
    .split(" ")
    .map(Number)
    .reduce((sum, now) => sum + now, 0);
  let b = input[1]
    .split(" ")
    .map(Number)
    .reduce((sum, now) => sum + now, 0);
  a > b ? console.log(a) : console.log(b);
}
