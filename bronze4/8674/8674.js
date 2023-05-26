//문제: 8674
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b] = input[0].split(" ").map(Number);
  if (a % 2 === 0 || b % 2 === 0) {
    console.log(0);
  } else {
    a < b ? console.log(a) : console.log(b);
  }
}
