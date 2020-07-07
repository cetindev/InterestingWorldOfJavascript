function customerFactory() {
  var custimerId = 0;
  return function () {
    custimerId++;
    return {
      "CustomerId": custimerId,
      "Name": "Tarik" + custimerId,
      "LastName": "Guney" + custimerId,
    }
  }
}

var customerFunc = customerFactory();
console.dir(customerFunc());
console.dir(customerFunc());
console.dir(customerFunc());
console.dir(customerFunc());

