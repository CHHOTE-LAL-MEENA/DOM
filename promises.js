// let myPormise= new Promise((resolve, reject)=>{
//     console.log("This is first promise.")
//     resolve(2)
// })
// let myPormise1= new Promise((resolve, reject)=>{
//     console.log("This is first promise.")
//     reject(2)
// })

// let firstPormise = new Promise((resolve, reject) => {
//   let data = true;
//   if (data) {
//     console.log("promise fulfilled.");
//     resolve("done");
//   } else {
//     console.log("promise rejected.");
//     reject("error: rejected");
//   }
// });

// let firstPormise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("This is chhotelal meena.");
//     resolve(2);
//   }, 5000);
// });

// let promise1 = new Promise((resolve, reject) => {
//   let data = true;
//   if (data) {
//     resolve("promise resolved.");
//   } else {
//     reject("error: promise rejected.");
//   }
// });

// promise1
//   .then((message) => {
//     console.log("this is the message:" + message);
//     return "second message of the promise1.";
//   })
//   .then((message) => {
//     console.log("this is second message:" + message);
//   })
//   .catch((error) => {
//     console.log("Error: " + error);
//   })
//   .finally(console.log("this is finally block of the code."));

let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "first");
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "second");
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "third");
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error("Error: " + error);
  });
