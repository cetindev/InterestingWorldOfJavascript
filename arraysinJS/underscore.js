var und = require("underscore");
//Bu dizideki çift sayıları bulan library fonksiyonu pratik basit kolaydır.
var even = und.filter([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0 });
console.log(even);

var listOfPlays = [{ author: "Tarik", year: 2017, age: 30 },
{ author: "Ali", year: 2017, age: 41 },
{ author: "Mehmet", year: 1999, age: 50 },];
var yazarlar = und.where(listOfPlays, { author: "Mehmet", year: 1999 });
console.dir(yazarlar);
