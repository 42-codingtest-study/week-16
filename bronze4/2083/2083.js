//문제: 2083
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.forEach((e) => {
    if (e === "# 0 0") return;
    const [name, age, weight] = e.split(" ");
    if (age > 17 || weight >= 80) console.log(`${name} Senior`);
    else {
      console.log(`${name} Junior`);
    }
  });
}
