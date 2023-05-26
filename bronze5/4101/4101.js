//문제: 4101
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  while (input[0] !== "0 0") {
    const [a, b] = input[0].split(" ").map(Number);
    a > b ? console.log("Yes") : console.log("No");
    input.shift();
  }
}
