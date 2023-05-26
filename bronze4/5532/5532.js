//문제: 5532
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let days = +input[0];
  const [m_page, k_page, m_can, k_can] = [
    input[1],
    input[2],
    input[3],
    input[4],
  ].map(Number);
  m_page / m_can > k_page / k_can
    ? console.log(parseInt(days - m_page / m_can))
    : console.log(parseInt(days - k_page / k_can));
}
