//문제: 6825
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let BMI = input[0] / (input[1] * input[1]);
  if (BMI < 18.5) console.log("Underweight");
  else if (BMI >= 18.5 && BMI <= 25.0) console.log("Normal weight");
  else console.log("Overweight");
}
