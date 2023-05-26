//문제: 8545
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let result = "";
  const input2 = input[0].split("");
  for (let i = input[0].length; i > 0; i--) {
    result += input2[i - 1];
  }
  console.log(result);
}
