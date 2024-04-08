document.body.onload = addElement();

function addElement() {
  const newDiv = document.createElement("div");

  const newContent = document.createTextNode("hi there");
  newDiv.appendChild(newContent);

  const parentDiv = document.getElementById("gameBox");
  const currentDiv = document.getElementById("div1");

  console.log("hi", newDiv);
  parentDiv.insertBefore(newDiv, currentDiv);
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.backgroundColor = "blue";
  newDiv.style.top = "0px";
  newDiv.style.left = "0px";
  newDiv.style.display = "flex";
  newDiv.innerHTML = "hey";
}

const candys = {};
