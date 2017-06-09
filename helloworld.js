var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var House = (function () {
    function House(numWin, numFl, houseCol, addr, protect) {
        this.address = addr;
        this.numWindows = numWin;
        this.numFloors = numFl;
        this.houseColor = houseCol;
        this.protection = protect;
    }
    House.prototype.giveAddress = function () {
        console.log("Our house address is: " + this.address);
    };
    House.prototype.breakWindow = function () {
        if (this.protection) {
            console.log("I HAVE PROTECTION! GET OFF MY LAWN!");
        }
        if (this.numWindows > 0 && !this.protection) {
            var newWin = this.numWindows--;
            console.log("My house now has " + newWin + "windows");
            console.log("Number if windows is now: " + this.numWindows + "windows");
        }
        else {
            console.log("All the windows are broken");
        }
    };
    House.prototype.changeHouseColor = function (newHouseColor) {
        this.houseColor = newHouseColor;
        return this.houseColor;
    };
    return House;
}());
var ivanHouse = new House(4, 1, "black", "5555 Merry Way, Candyland", true);
var wadsonHouse = new House(7, 3, "white", "1st Penn Ave", false);
ivanHouse.giveAddress();
ivanHouse.breakWindow();
var newColor = ivanHouse.changeHouseColor("blue");
console.log("Ivan's new house color is: " + newColor);
var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.sayHi = function () {
        return "<h1>" + this.message + "</h1>";
    };
    return Greeter;
}());
var greeter = new Greeter("Hello, world!");
console.log(greeter.message);
document.body.innerHTML = greeter.sayHi();
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("roamin the earth...");
    };
    return Animal;
}());
var Canine = (function (_super) {
    __extends(Canine, _super);
    function Canine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Canine;
}(Animal));
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Woof");
    };
    return Dog;
}(Canine));
