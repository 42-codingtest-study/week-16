//문제: 4470
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.shift();
  input.forEach((e, idx) => {
    console.log(`${idx + 1}. ${e}`);
  });
}
