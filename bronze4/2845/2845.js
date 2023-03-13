//문제: 2845
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let num = input[0].split(" ")[0] * input[0].split(" ")[1];
  let result = "";
  input[1].split(" ").forEach((e) => {
    result += `${+e - num} `;
  });
  console.log(result.trim());
}
