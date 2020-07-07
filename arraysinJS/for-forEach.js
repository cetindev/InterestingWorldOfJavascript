var customers = ["tarik", , "mehmet"];
var items = [1, "tarik", true];

/* for (var i = 0; i < items.length; i++) {
  console.log(customers[i]);
}

for (var customer in customers) {
  console.log(customer);
}
*/
/* var mutluMusteriler = { "isim": "Cİhat", "soyadi": "Salik" };
for (var customer in mutluMusteriler) {
  console.log(mutluMusteriler[customer]);
}
console.log("********************************************************************************************************************************************");

for (var customer in customers) {
  console.log(customers[customer]);//burda boş olanları döndürmüyor forEach özğü bişey
}
console.log("/////////Altdakinde undifined diyor ve boş olanları gösteriyor ama forEach göstermiyor");
for (var i = 0; i < items.length; i++) {
  console.log(customers[i]);
} */

/* Array.prototype.selamDunya = "2";
var customers = ["tarik",,"mehmet"];
var items = [3, "tarik", "merhabalar"];
var mutluMusteriler = {"isim":"tarik", "soyadi": "güney"};
for(var customer in customers) {
  console.log(customer);
} */

//;ç,nde a olan kelimeleri döndüren kod

var array = ["Cİhat", "veli", "ahmet", "MehMEt"];
for (var i = 0; i < array.length; i++) {
  if (array[i].includes("a")) {
    console.log(array[i]);
  }
}
//Bunun yerine çok hazır kolay kısayolu olan kütüphane kullanmaktır.Kütüphanenin adı underscore.js'dir
//Bu underscore'u da npm den indiriyoruz
