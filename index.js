document.body.onload = addElement;

function addElement() {
  const newDiv = document.createElement("div");

  const newContent = document.createTextNode("hi there");
  newDiv.appendChild(newContent);

  const currentDiv = document.getElementById("div1");

  document.body.insertBefore();
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.backgroundColor = "red";
  newDiv.style.top = "0px";
  newDiv.style.left = "0px";
}

const candys = {};
