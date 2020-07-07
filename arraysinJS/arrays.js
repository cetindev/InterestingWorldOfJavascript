var customers = ["tarik", "jon", "mehmet"];
var items = [1, "tarik", true];
/* 
var musteriler = new Array(10);
console.log(musteriler.length);
 */

/* console.log(customers);
 */
console.log(items.length);
/* console.log(items.indexOf("1"));//Girilen değeri dizide var mı varsa kaçıncı indexde onu bulur Yoksa -1 dönderir.
console.log(items.indexOf("tarik"));
 */

var lastItem = items.pop();
console.log(lastItem);
console.dir(items);// pop() dizideki son elemanı alır ve lastItems atar ve diziden koparır.
//append bir şeyin sonuna eklemek demek,prepend ise bir şeyin aşına eklemek demektir.

Array.prototype.ilkElementiIkiIleCarp = function () {
  return this[0] * 2;
}
console.log(items.ilkElementiIkiIleCarp());

console.log("********************************************************************************************************");

var musteriler2 = { "isim": "tarik", "soyadi": "guney" };
console.log(musteriler2.isim);
console.log(musteriler2["soyadi"]);

function musteriBilgisiVer(bilgi) {
  return musteriler2[bilgi];
}
console.log(musteriBilgisiVer("isim"));
