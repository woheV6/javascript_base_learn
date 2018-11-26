global.color = "red";
var obj = {
  color: "blue"
};
function sayColor() {
  console.log(this.color);
}

obj.sayColor = sayColor;
obj.sayColor();
var sayColor1 = obj.sayColor;
sayColor1();
