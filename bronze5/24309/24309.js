//문제: 24309
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  console.log(
    ((BigInt(input[1]) - BigInt(input[2])) / BigInt(input[0])).toString()
  );
}
