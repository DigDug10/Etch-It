  // = () => returns the function, saving lines of code
  // +=  x+=y  same as x=x+y

  function frame() {
    let contain = document.querySelector(".container");
    contain.style.margin = "3rem auto 2 rem auto";
    contain.style.padding = "1rem";
    contain.style.textAlign = "center";
    contain.style.backgroundColor = "red";
    contain.style.borderRadius ="8%";
    // contain.style.boxShadow =  "inset 10px 10px 3.5rem #888";
  
  }

function createGrid(num) {
    console.log(num);  
    let markup = document.createElement("div");
    markup.className = "gridContainer";
    markup.id = "gridContainer"
    markup.style.display = "grid";
    markup.style.gridTemplateColumns = 'auto '.repeat(num);
    markup.style.minWidth = "200px";
    markup.style.minHeight = "600px";
    markup.style.backgroundColor = "#c4c4c4";
    markup.style.boxShadow = "0px 0px 3.5rem #333";
    console.log(markup.style.backgroundColor);
    document.querySelector("#grid").appendChild(markup);
}

const createItems = (num) => {
  console.log(num);
  for (let i = 0; i < num * num; i++) {
      const div1 = document.createElement("div");
      div1.className = "gridItem";
      div1.addEventListener("mouseenter", fillGridGrey);
      document.querySelector(".gridContainer").appendChild(div1);
    
    }
}

function controls() {
  let bottomControls = document.querySelector(".controls");
  bottomControls.style.display = "flex";
  bottomControls.style.justifyContent = "center";
  bottomControls.style.padding = "1rem";
  bottomControls.style.maxWidth = "1000px";
}


function fillGridGrey(e) {
  if (onOff == "off"){
    this.style.backgroundColor = color;
  }
  else {
    const redVal = Math.floor(Math.random() * 256);
    const grnVal = Math.floor(Math.random() * 256);
    const bluVal = Math.floor(Math.random() * 256);

    this.style.backgroundColor = `rgba(${redVal},${grnVal},${bluVal})`;
  }
}

function createButtons() {
  // let button = document.querySelector("#black");
  let button = document.getElementById("black");
  button.style.color = "green";
  button.style.backgroundColor = "white";
  button.style.border = "1px solid rgb(195,195,195)";
  button.style.padding = "0.5rem 0.75rem";
  button.style.margin = "0 1rem";
  button.style.height = "5%";
  button.style.borderRadius = "50%";
  button.addEventListener("click", colorTest);
  console.log(onOff);
}

function colorTest() {
  console.log(onOff);
  if (onOff=='on') {
    console.log(onOff);
    onOff = 'off';
  }
  else {
    console.log(onOff);
    onOff = 'on';
  }
}

function clearButton() {
  let button = document.getElementById("clear");
  button.style.color = "green";
  button.style.backgroundColor = "white";
  button.style.border = "1px solid rgb(195,195,195)";
  button.style.padding = "0.5rem 0.75rem";
  button.style.margin = "0 1rem";
  button.style.height = "5%";
  button.style.borderRadius = "50%";
  console.log(num);
  console.log(button);
  console.log(button.style.margin);
  button.addEventListener("click", e => clearGrid());
  // button.addEventListener("click", refreshGrid);
  console.log(onOff);
}

// erase exsiting grid
const clearGrid = () => {
  console.log(onOff);
  const square = document.querySelectorAll(".gridItem");
  console.log(square);
  square.forEach(div => (div.style.backgroundColor = "#c4c4c4"));
  square.forEach(div => (div.style.opacity = 1.1));
};

// erase without using forEach
function refreshGrid() {
  let x = document.querySelectorAll(".gridItem");
  // console.log(x);
  console.log(x[0]);
  console.log(x[0].style.backgroundColor);

  for (i=0; i < x.length; i++) {
    // console.log(i);
    x[i].style.backgroundColor = "#c4c4c4";
  }
}

function numberButton() {

  let button = document.getElementById("updateGrid");
  button.addEventListener("click", e => updateGrid(num));
}


//  Delete and re-create the grid--
function updateGrid(num) {
  let z = document.getElementById("gridQty").value;
  console.log(z);
  num = z;
  console.log(num);

  let x = document.getElementById("gridContainer");
  console.log(x);
  x.remove();
  console.log(num);
  markup = document.querySelector(".container");
  console.log(markup);
  createGrid(num);
  createItems(num);
}

// -----------------





let onOff = "off";
let color = "blue";
let num = 30;

frame();
createGrid(num);
createButtons();
createItems(num);
controls();
clearButton();
numberButton();
