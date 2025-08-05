function outFunction() {
  let name = "chhotelal";
  function innerFunction() {
    //  Inner fuction takes the reference of the name variable and bind with this.
    console.log(name);
  }
  return innerFunction;
}
let inner = outFunction();
inner(); // Now it is printing the name -> chhotelal
