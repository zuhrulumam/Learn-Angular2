"use strict";
;
/**
 * Person
 */
var Person = (function () {
    function Person() {
        this.height = 0;
        this.name = 'Umam';
    }
    ;
    Person.prototype.rename = function () {
        this.name = "Change";
    };
    ;
    Person.prototype.addHeight = function () {
        this.height += 1;
    };
    ;
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map