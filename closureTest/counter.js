/* function counterGenerator() {
  var counter = 0;
  var counterFunc = function () {
    return counter += 1;
  }
  return counterFunc;
}
var counter = counterGenerator();
console.log(counter());
console.log(counter());
 */


function counterGenerator() {
  var counter = 0;
  var counterFunc = function () {
    var innerCounter = 0;
    console.log("From Inner Counter: " + (++innerCounter));
    return counter += 1;
  }
  return counterFunc;
}
var counter = counterGenerator();
console.log(counter());
console.log(counter());
console.log(counter());
