//문제: 15723
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b] = [parseInt(input[0] / 5), input[0] % 5];
  b === 0 ? console.log(a) : console.log(a + 1);
}
