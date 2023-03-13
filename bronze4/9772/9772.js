//문제: 9772
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.forEach((e) => {
    const [a, b] = e.split(" ").map(Number);
    if (a === 0 || b === 0) {
      console.log("AXIS");
    } else if (a > 0 && b > 0) {
      console.log("Q1");
    } else if (a < 0 && b > 0) {
      console.log("Q2");
    } else if (a < 0 && b < 0) {
      console.log("Q3");
    } else if (a > 0 && b < 0) {
      console.log("Q4");
    }
  });
}
