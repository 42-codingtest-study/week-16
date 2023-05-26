//문제: 25238
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [defends, ig_defends] = input[0].split(" ").map(Number);
  (defends * (100 - ig_defends)) / 100 < 100 ? console.log(1) : console.log(0);
}
