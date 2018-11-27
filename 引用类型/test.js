function Create(name, age) {
  this.name = name;
  this.age = age;
  this.sayhello = function() {
    console.log(this.name);
  };
}
const o1 = new Create("kimi", 21);
const f = o1.sayhello;
f();
