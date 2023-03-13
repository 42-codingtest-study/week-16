//문제: 17256
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [ax, ay, az] = input[0].split(" ").map(Number);
  const [cx, cy, cz] = input[1].split(" ").map(Number);

  console.log(`${cx - az} ${cy / ay} ${cz - ax}`);
}
