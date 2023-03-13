//문제: 6810
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  console.log(
    `The 1-3-sum is ${91 + input[0] * 1 + input[1] * 3 + input[2] * 1}`
  );
}
