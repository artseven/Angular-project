class Greeter {
  constructor(public message: string) {}
  sayHi() {
    return "<h1>" + this.message + "</h1>";
  }
}

let greeter = new Greeter ("Hello, world!");
console.log(greeter.message);

document.body.innerHTML = greeter.sayHi();
