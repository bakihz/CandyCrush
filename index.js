document.body.onload = addElement();

function addElement() {
  // const newContent = document.createTextNode("hi there");
  // newDiv.appendChild(newContent);

  const parentDiv = document.getElementById("gameBox");

  // creating cells
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const box = document.createElement("div");
      box.id = "row" + i + j;
      box.style.position = "absolute";
      box.style.display = "flex";
      let y = i * 75;
      y = String(y) + "px";
      let x = j * 75;
      x = String(x) + "px";
      box.style.marginTop = y;
      box.style.marginLeft = x;
      box.style.width = "75px";
      box.style.height = "75px";
      box.style.textAlign = "center";
      box.style.backgroundColor = "grey";
      parentDiv.appendChild(box);
      box.innerHTML = box.id;
      box.addEventListener("click", function () {
        candys.push(box);
        if (candys.length == 2) {
          moveElements();
        }
        console.log(candys);
      });
      console.log(box);
    }
  }

  var candys = [];

  // moving elements
  function moveElements() {
    function c() {
      document.getElementById("gameBox").childNodes[0].insertBefore(
        candys[0],
        candys[1]
        // document.getElementById("gameBox").childNodes[1].childNodes[0],
        // document.getElementById("gameBox").childNodes[0].childNodes[0]
      );
      candys = [];
    }
    setInterval(c(), 5);
    // document.getElementById("gameBox")();
    // .childNodes[1].insertBefore
    // document.getElementById("gameBox").childNodes[0].childNodes[1],
    // document.getElementById("gameBox").childNodes[1].childNodes[0]

    candys = [];
  }

  const cell11 = document.getElementById("cell11");
  const cell12 = document.getElementById("cell12");

  cell11.addEventListener("click", function () {
    candys.push(cell11);
    if (candys.length == 2) {
      moveElements();
    }
    console.log(candys);
  });

  cell12.addEventListener("click", function () {
    candys.push(cell12);
    if (candys.length == 2) {
      moveElements();
    }
    console.log(candys);
  });
}
