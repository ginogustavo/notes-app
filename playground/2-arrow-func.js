const square0 = function (x) {
  return x * x;
};
const square1 = (x) => {
  return x * x;
};
const square = (x) => x * x;
//console.log(square(2));

const event0 = {
  name: "Birthday party",
  printGuestList: function () {
    console.log("Guest list for " + this.name);
  },
};
const event1 = {
  name: "Birthday party",
  printGuestList: () => {
    console.log("Guest list for " + this.name); // UNDEFINED,
    //Arrow function don't bind their own "this" value, so we don't have access.
    //A.functions aren't well suited for methods, when we want to access "this" -> use standard fucntion version
  },
};

const event = {
  name: "Birthday party",
  guestList: ["Gino", "Naty", "Mark"],
  printGuestList() {
    // alternative syntax for function in an object
    this.guestList.forEach((guest) => {
      //A.function don't bind their own "this" value, They access "this" value in the context which they are created(inside guestPrintList() function)
      console.log(`${guest} is attending ${this.name}`);
    });

    console.log("Guest list for " + this.name);
  },
};

event.printGuestList();
