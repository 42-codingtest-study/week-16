//문제: 8437
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b] = [BigInt(input[0]), BigInt(input[1])];
  console.log(((a + b) / 2n).toString());
  console.log(((a - b) / 2n).toString());
}
