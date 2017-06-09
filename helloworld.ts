// blueprint of a house
class House {
  // constructor CREATES your objects
  // addr is a constructor parameter
  constructor(addr: string){
    this.address = addr;
  }
  // instance variables - what an object is
  private numWindows: number;
  private numFloors: number;
  private houseColor: string;
  private address: string;

  // what an object does
  // void - doesn't return anything
  public giveAddress(): void{
    // do a bunch of work
    console.log("Our house address is: " + this.address);
  }

  public breakWindow(): number{
    this. numWindows = --(this.numWindows);
    console.log("Number if windows is now: " + this.numWindows);
  }
}

let ivanHouse = new House();

ivanHouse.giveAddress();




class Greeter {
  constructor(public message: string) {}
  sayHi() {
    return "<h1>" + this.message + "</h1>";
  }
}

let greeter = new Greeter ("Hello, world!");
console.log(greeter.message);

document.body.innerHTML = greeter.sayHi();
