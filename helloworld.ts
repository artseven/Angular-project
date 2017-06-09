// blueprint of a house
class House {
  // constructor CREATES your objects
  // addr is a constructor parameter
  constructor(numWin: number, numFl: number, houseCol: string, addr: string, protect: boolean){
    this.address = addr;
    this.numWindows = numWin;
    this.numFloors = numFl;
    this.houseColor = houseCol;
    this.protection = protect;
  }


  // instance variables - what an object is
  private numWindows: number;
  private numFloors: number;
  private houseColor: string;
  private address: string;
  private protection: boolean;

  // what an object does
  // void - doesn't return anything
  public giveAddress() : void{
    // do a bunch of work
    console.log("Our house address is: " + this.address);
  }

  public breakWindow(): void{

    if(this.protection){
      console.log("I HAVE PROTECTION! GET OFF MY LAWN!");
    }



    if(this.numWindows > 0 && !this.protection ){
    let newWin: number = this.numWindows--;
    console.log("My house now has " + newWin + "windows");
    console.log("Number if windows is now: " + this.numWindows + "windows");
    }
    else {
      console.log("All the windows are broken");
    }
  }
  public changeHouseColor(newHouseColor: string) : string {

    this.houseColor = newHouseColor;
    return this.houseColor;
  }
}
// ivanHouse is an object
let ivanHouse = new House(4, 1, "black","5555 Merry Way, Candyland", true);

let wadsonHouse = new House(7, 3, "white", "1st Penn Ave", false);

ivanHouse.giveAddress();
ivanHouse.breakWindow();
let newColor = ivanHouse.changeHouseColor("blue");
console.log("Ivan's new house color is: " + newColor);




class Greeter {
  constructor(public message: string) {}
  sayHi() {
    return "<h1>" + this.message + "</h1>";
  }
}

let greeter = new Greeter ("Hello, world!");
console.log(greeter.message);

document.body.innerHTML = greeter.sayHi();


abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("roamin the earth...");
  }
}

abstract class Canine extends Animal {
  // doing a bunch of canine stuff
}

class Dog extends Canine{
  public makeSound(): void{
    console.log("Woof");
  }
}
