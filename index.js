document.body.onload = addElement();

function addElement() {
  // const newContent = document.createTextNode("hi there");
  // newDiv.appendChild(newContent);

  const parentDiv = document.getElementById("gameBox");

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
      innerCell.innerHTML = "hi" + j + i;
      // tableCell.style.cssText = `
      //  width:87px;
      //  height: 12.5vh;
      //  top:0px;
      //  left:0px;
      //  background-color:gray;
      //  display:flex;
      //  justify-content:center;
      //  align-items:center;
      // `;
      // innerCell.style.cssText = `
      //  width:90%;
      //  height:90%;
      //  background-color:white;
      //  display:flex;
      // `;
    }
  }

  var candys = [];
  function moveElements() {
    function c() {
      console.log(
        "hi",
        document

          .getElementById("gameBox")
          .childNodes[0].insertBefore(
            document.getElementById("gameBox").childNodes[0].childNodes[1],
            document.getElementById("gameBox").childNodes[0].childNodes[0]
              .insertBefore
          )
      );
    }
    setInterval(c(), 5);

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
