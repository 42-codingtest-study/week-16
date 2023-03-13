//문제: 2738
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [n, m] = input.shift().split(" ").map(Number);
  const matrix1 = [];
  const matrix2 = [];
  for (let i = 0; i < n; i++) {
    matrix1.push(input[i].split(" ").map(Number));
  }
  for (let i = n; i < n * 2; i++) {
    matrix2.push(input[i].split(" ").map(Number));
  }
  for (let a = 0; a < n; a++) {
    let line = "";
    for (let b = 0; b < m; b++) {
      line += `${matrix1[a][b] + matrix2[a][b]} `;
    }
    console.log(line.trim());
  }
}
