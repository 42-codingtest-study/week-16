//문제: 9782
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.forEach((e, idx) => {
    if (e === "0") return;
    const arr = e.split(" ").map(Number);
    let n = arr.shift();
    let answer = 0;
    n % 2 === 1
      ? (answer = arr[(n - 1) / 2])
      : (answer = (arr[n / 2 - 1] + arr[n / 2]) / 2);
    console.log(`Case ${idx + 1}: ${parseFloat(answer).toFixed(1)}`);
  });
}
