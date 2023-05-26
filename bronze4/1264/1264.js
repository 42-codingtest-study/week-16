//문제: 1264
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  moeums = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const check_mouem = (str) => {
    let result = 0;
    const arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
      if (moeums.includes(arr[i])) {
        result++;
      }
    }
    return result;
  };
  input.forEach((e) => {
    if (e === "#") return;
    console.log(check_mouem(e));
  });
}
