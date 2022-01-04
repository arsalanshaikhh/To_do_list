document.querySelector("#sub").addEventListener("submit", abc);
var arr = JSON.parse(localStorage.getItem("todoList")) || [];
displayTable(arr);

function abc(event) {
  event.preventDefault();

  var name = document.querySelector("#name").value;
  var qt = document.querySelector("#qt").value;
  var pr = document.querySelector("#pr").value;

  var todoObj = {
    itemName: name,
    itemQty: qt,
    ItemPr: pr,
  };
  arr.push(todoObj);
  console.log(arr);
  localStorage.setItem("todoList", JSON.stringify(arr));

  displayTable(arr);
}

function displayTable(arr) {
  document.querySelector("tbody").innerHTML = "";
  arr.map(function (elem, index) {
    var row = document.createElement("tr");

    var data1 = document.createElement("td");
    data1.textContent = elem.itemName;
    var data2 = document.createElement("td");
    data2.textContent = elem.itemQty;
    var data3 = document.createElement("td");
    data3.textContent = elem.ItemPr;

    if (elem.ItemPr == "high") {
      data3.style.backgroundColor = "palevioletred";
      data3.style.color = "white";
    } else if (elem.ItemPr == "medium") {
      data3.style.backgroundColor = "turquoise";
      data3.style.color = "white";
    } else if (elem.ItemPr == "low") {
      data3.style.backgroundColor = "yellowgreen";
      data3.style.color = "white";
    }

    var data4 = document.createElement("td");
    data4.textContent = "Delete";

    row.append(data1, data2, data3, data4);

    document.querySelector("tbody").appendChild(row);

    data4.addEventListener("click", function () {
      deleteTask(index);
    });
  });
}

function deleteTask(index) {
  console.log(index);
  arr.splice(index, 1);
  localStorage.setItem("todoList", JSON.stringify(arr));
  displayTable(arr);
}
