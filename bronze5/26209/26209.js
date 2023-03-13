//문제: 26209
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let answer = "S";
  const arr = input[0].split(" ");
  arr.forEach((e) => {
    if (e !== "0" && e !== "1") {
      answer = "F";
    }
  });
  console.log(answer);
}
