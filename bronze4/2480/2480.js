//문제: 2480
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b, c] = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  if (a === b && b === c) console.log(a * 1000 + 10000);
  else if (a === b) console.log(a * 100 + 1000);
  else if (a === c) console.log(a * 100 + 1000);
  else if (b === c) console.log(b * 100 + 1000);
  else {
    console.log(c * 100);
  }
}
