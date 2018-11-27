function setNumber(mix, max) {
  let t = max - mix + 1;
  return Math.floor(Math.random() * t + mix);
}
console.log(setNumber(2, 10));
