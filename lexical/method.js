/* var mars = {
  name: "Mars",
  getName: getName,
}
var dunya = {
  name: "Dunya",
  getName: getName,
}
function getName() {
  return this.name;
  //Veriable and Function Hoisting  
}


console.log(mars.getName());
console.log(dunya.getName());

//Bu bir methodtur.İçinde functions tanımlayabiliriz.
 */


var mars = {
  name: "Mars",
  getName: function () {
    return function () {
      return this.name;//undifined vericek çünkü  fonk içinde fonk tanımlarsak burdaki 
      //this kendini globaldaki objeye bağlayacak yani processe bağlayacak
      //dolayısıyla process içerisinde name diye bir property tanımlanmadığı için sonuç undefined oldu.
    }
  }
}

var nameFunc = mars.getName();
console.log(nameFunc());


//Yukarıdaki olayı capsure yaparak yakalayacağız bir değişken yaparak dışarıda yakalayacak sonra onu ona atacaktır.
var mars2 = {
  name: "Mars",
  getName: function () {
    var that = this;
    return function () {
      return that.name;
    }
  }
}

var nameFunc = mars2.getName();
console.log(nameFunc());



console.log("********************************************************************************");


var mars3 = {
  name: "Mars3",
  getName: function () {
    return this.name;
  }
}
var dunya3 = {
  name: "dunya3",
  getName: mars3.getName
}
console.log(dunya3.getName());
