const countBs = (string) => {
  let Bs = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "B") {
      Bs++
    }
  }
  return Bs
}

const countChar = (string, char) => {
  let charCount = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      charCount++
    }
  }
  return charCount
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4