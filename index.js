// ---------------------EVENT LISTNERS---------------------------

function handleEvent() {
  let para = document.getElementById("heading");
  para.textContent = "Chhote Lal Meena";
  console.log(para);
}

let para = document.getElementById("heading");
para.addEventListener("click", handleEvent);
// para.removeEventListener("click", handleEvent);

function handleTarget(event) {
  console.log(event);
  let span = document.getElementsByTagName("span");
  span.textContent = "this is type of span";
  alert("you'r clicked on span");
}

let span = document.getElementById("span");
span.addEventListener("click", handleTarget);
// span.removeEventListener("click", handleTarget);

let anchor = document.getElementById("anchor");
console.log(anchor);

anchor.addEventListener("click", function (e) {
  e.preventDefault();
  anchor.textContent = "you'r clicked";
});

function alertPara(e) {
  alert("You'r clicked on para: " + e.target.textContent);
}

let paras = document.querySelectorAll("p");
console.log(paras);
for (let i = 0; i < paras.length; i++) {
  let para = paras[i];
  para.addEventListener("click", alertPara);
}

// ------------------REFLOW AND REPAINT-----------------------------------

// CODE 1

const t1 = performance.now();
for (let i = 1; i <= 100; i++) {
  let para = document.createElement("p");
  para.textContent = "this is para: " + i;
  document.body.appendChild(para);
}
const t2 = performance.now();
console.log("total performance time of code 1 is : " + (t2 - t1));

//  CODE 2

const t3 = performance.now();
let mydiv = document.createElement("div");
for (let i = 1; i <= 100; i++) {
  let para = document.createElement("p");
  para.textContent = "this is div : " + i;
  mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
const t4 = performance.now();
console.log("total performance time of code 2 is : " + (t4 - t3));

//  BEST CODE

const t5 = performance.now();
let fragment = document.createDocumentFragment();
for (let i = 1; i <= 100; i++) {
  let para = document.createElement("p");
  para.textContent = "this is fragment: " + i;
  fragment.appendChild(para); // no reflow and no repaint
}
document.body.appendChild(fragment); //one reflow and one repaint
const t6 = performance.now();
console.log("total performence of the best code is: " + (t6 - t5));
