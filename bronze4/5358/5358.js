//문제: 5358
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.forEach((e) => {
    e = e.split("");
    for (let i = 0; i < e.length; i++) {
      if (e[i] === "E") e[i] = "I";
      else if (e[i] === "e") e[i] = "i";
      else if (e[i] === "i") e[i] = "e";
      else if (e[i] === "I") e[i] = "E";
    }
    console.log(e.join(""));
  });
}
