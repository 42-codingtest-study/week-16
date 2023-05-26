//문제: 22193
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let trash = input.shift();
  console.log((BigInt(input[0]) * BigInt(input[1])).toString());
}
