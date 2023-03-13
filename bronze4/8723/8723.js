//문제: 8723
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b, c] = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  if (a === b && b === c) console.log(2);
  else if (c * c === a * a + b * b) console.log(1);
  else console.log(0);
}
