document.body.onload = addElement();

function addElement() {
  // const newContent = document.createTextNode("hi there");
  // newDiv.appendChild(newContent);

  const parentDiv = document.getElementById("gameBox");

  // creating cells
  for (let i = 1; i < 9; i++) {
    const tableRow = document.createElement("tr");
    tableRow.id = "row" + i;
    parentDiv.appendChild(tableRow);
    for (let j = 1; j < 9; j++) {
      const tableCell = document.createElement("td");
      tableCell.id = "cell" + j + i;
      const innerCell = document.createElement("div");
      innerCell.id = "icell" + j + i;
      tableRow.appendChild(tableCell);
      tableCell.appendChild(innerCell);
      innerCell.innerHTML = "hi " + j + i;
      tableCell.addEventListener("click", function () {
        candys.push(tableCell);
        if (candys.length == 2) {
          moveElements();
        }
        console.log(candys);
      });
      console.log(tableCell);
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
