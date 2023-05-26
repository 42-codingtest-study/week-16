//문제: 2744
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  str = input[0].split("");
  answer = "";
  str.forEach((e) => {
    if (e.charAt(0) >= "a" && e.charAt(0) <= "z") answer += e.toUpperCase();
    else if (e.charAt(0) >= "A" && e.charAt(0) <= "Z")
      answer += e.toLowerCase();
  });
  console.log(answer);
}
