'use strict';
(function() {
    function Employee(id) {
        this.id = id;
        this.name = 'Default';
        this.employeer = { name: 'MUM' };
    }

    Employee.prototype.getName = function () {
        return this.name;
    }

    Employee.prototype.getEmployeerName = function() {
        return this.employeer.name;
    }

    let john = new Employee(98000);
})();