function User() {
  console.log('User sınıfına erisildi');
  this.getName = function (name) {
    return "Merhabalar " + name;
  };
}

var user = new User();
console.log(user.getName("Cihat SAlik"));

var user2 = new User();
console.log(user2.getName("GulliAli"));
