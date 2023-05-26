//문제: 2530
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [h, m, s] = input[0].split(" ").map(Number);
  let num = h * 3600 + m * 60 + s + +input[1];
  let result = "";
  result += parseInt((num / 3600) % 24);
  result += " ";
  num = num % 3600;
  result += parseInt(num / 60);
  result += " ";
  num = num % 60;
  result += num;
  console.log(result);
}
