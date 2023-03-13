//문제: 6778
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [antennas, eyes] = [input[0], input[1]].map(Number);
  if (antennas >= 3 && eyes <= 4) console.log("TroyMartian");
  if (antennas <= 6 && eyes >= 2) console.log("VladSaturnian");
  if (antennas <= 2 && eyes <= 3) console.log("GraemeMercurian");
}
