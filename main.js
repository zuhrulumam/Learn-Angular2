"use strict";
var Person_1 = require('./Person');
var myobj = {
    id: 1,
    name: "Umam",
    method: function () { console.log("lalala"); },
    methodWithReturn: function () { return 2; },
    sum: function (numbers) {
        return numbers.reduce(function (a, b) { return a + b; });
    },
};
var sum = myobj.sum([1, 2, 3]);
var person = new Person_1.Person();
person.height = 1;
person.addHeight();
//# sourceMappingURL=main.js.map