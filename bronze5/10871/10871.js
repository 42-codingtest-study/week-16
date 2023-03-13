//문제: 10871
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let num = +input[0].split(" ")[1];
  const arr = input[1].split(" ").map(Number);
  let answer = "";
  arr.forEach((e) => {
    if (e < num) answer += `${e} `;
  });
  console.log(answer);
}
