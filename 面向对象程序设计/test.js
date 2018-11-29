// 构造函数+原型模式
function create(obj) {
  function o() {}
  o.prototype = obj;
  return new o();
}
function CreateObj(subType, superType) {
  const clone_super_proto = create(superType.prototype);
  clone_super_proto.constructor = subType;
  subType.prototype = clone_super_proto;
}
function Person(name) {
  this.name = name;
  this.list = [122];
}
function Student(name) {
  Person.call(this, name);
}
CreateObj(Student, Person);
const s = new Student("zs");
const s2 = new Student("zs2");
s2.list.push(10);
console.log(s.list); // [122]
