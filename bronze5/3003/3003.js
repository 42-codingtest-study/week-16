//문제: 3003
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const checker = [1, 1, 2, 2, 2, 8];
  let result = "";
  const arr = input[0].split(" ").map(Number);
  let i = 0;
  while (i < 6) {
    result += `${checker[i] - arr[i]} `;
    i++;
  }
  console.log(result.trim());
}
