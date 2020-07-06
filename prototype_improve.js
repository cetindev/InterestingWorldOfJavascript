function User() {
  console.log("User Sınıfına Erisildi");
}

Function.prototype.getFullName = function (name) {
  return "Merhabalar " + name;
}

console.dir(Function.prototype);