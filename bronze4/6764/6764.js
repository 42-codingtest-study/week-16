//문제: 6764
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b, c, d] = [input[0], input[1], input[2], input[3]].map(Number);
  if (a < b && b < c && c < d) {
    console.log("Fish Rising");
  } else if (a > b && b > c && c > d) {
    console.log("Fish Diving");
  } else if (a === b && b === c && c === d) {
    console.log("Fish At Constant Depth");
  } else console.log("No Fish");
}
