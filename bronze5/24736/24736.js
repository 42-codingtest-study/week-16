//문제: 24736
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const point = [6, 3, 2, 1, 2];
  const arr1 = input[0].split(" ").map(Number);
  const arr2 = input[1].split(" ").map(Number);
  console.log(
    `${arr1.reduce(
      (sum, curr, idx) => sum + curr * point[idx],
      0
    )} ${arr2.reduce((sum, curr, idx) => sum + curr * point[idx], 0)}`
  );
}
