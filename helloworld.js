var House = (function () {
    function House(addr) {
        this.address = addr;
    }
    House.prototype.giveAddress = function () {
        console.log("Our house address is: " + this.address);
    };
    House.prototype.breakWindow = function () {
        this.numWindows = --(this.numWindows);
        console.log("Number if windows is now: " + this.numWindows);
    };
    return House;
}());
var ivanHouse = new House();
ivanHouse.giveAddress();
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
