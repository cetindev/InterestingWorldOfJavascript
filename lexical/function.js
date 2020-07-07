function helloWorld() { }//name function isimlendirilmiş bir fonksiyondur.
var helloMars = function merhabaMasrs() {
  "use strict"
  return this;
 } //anonymous fonctions bir ismi olmayan parametre olarak gönderilin fonksiyonlardır.
//function() {} //buda aynı şekilde anonymous function'dur.

/* console.log(helloMars.name);
console.log(helloWorld.name);
 */
console.log(helloMars());
