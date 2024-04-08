document.body.onload = addElement();

function addElement() {
  const outerBox = document.createElement("div");
  const innerBox = document.createElement("div");

  // const newContent = document.createTextNode("hi there");
  // newDiv.appendChild(newContent);

  const parentDiv = document.getElementById("gameBox");

  console.log("hi", outerBox);
  parentDiv.appendChild(outerBox);
  outerBox.appendChild(innerBox);

  outerBox.style.cssText = `
   width:12.5%;
   height: 100px;
   top:0px;
   left:0px;
   display:flex;
   justify-content:center;
   align-items:center;
  `;
  innerBox.style.cssText = `
   width: 90px;
   height:90px;
   background-color:white;
   display:flex;
  `;
}
addElement();

addElement();
addElement();
addElement();
addElement();

const candys = {};
