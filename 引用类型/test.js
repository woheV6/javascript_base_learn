let list = [{ name: "tomo" }, { name: "jok" }, { name: "linda" }];
list.map(item => {
  item.name = "noio";
  item = null;
});
console.log(list);
