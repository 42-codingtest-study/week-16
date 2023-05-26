//문제: 21300
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let result = 0;
  input[0]
    .split(" ")
    .map(Number)
    .forEach((e) => (result += e));
  console.log(result * 5);
}
