//문제: 23235
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let i = 1;
  while (input[0] !== "0") {
    console.log(`Case ${i++}: Sorting... done!`);
    input.shift();
  }
}
