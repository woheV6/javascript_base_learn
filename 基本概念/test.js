function test(a, b) {
  arguments[1] = 10;
  console.log(b);
}
test(1, 2);
