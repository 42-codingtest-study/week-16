//문제: 14581
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  console.log(`:fan::fan::fan:\n:fan::${input[0]}::fan:\n:fan::fan::fan:`);
}
