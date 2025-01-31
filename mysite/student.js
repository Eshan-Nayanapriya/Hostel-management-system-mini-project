var studentDataArr = JSON.parse(localStorage.getItem("studentData")) || [];

function displayFun(studentDataArr) {
  document.querySelector("#tbody").innerHTML = "";

  studentDataArr.forEach(function (item, index) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerHTML = index + 1;

    var td2 = document.createElement("td");
    td2.innerHTML = item.name;

    var td3 = document.createElement("td");
    td3.innerHTML = item.regNo;

    var td4 = document.createElement("td");
    td4.innerHTML = item.degree;

    var td6 = document.createElement("td");

    var btn1 = document.createElement("button");
    btn1.innerHTML = "Present";
    btn1.addEventListener("click", function () {
      item.attendance = "present";
      localStorage.setItem("studentData", JSON.stringify(studentDataArr));
      displayFun(studentDataArr);
    });

    var btn2 = document.createElement("button");
    btn2.innerHTML = "Absent";
    btn2.addEventListener("click", function () {
      item.attendance = "absent";
      localStorage.setItem("studentData", JSON.stringify(studentDataArr));
      displayFun(studentDataArr);
    });

    var btn3 = document.createElement("button");
    btn3.innerHTML = "Delete";
    btn3.addEventListener("click", function () {
      if (confirm("Are you sure you want to delete this student?")) {
        studentDataArr.splice(index, 1);
        localStorage.setItem("studentData", JSON.stringify(studentDataArr));
        tr.remove();
        alert("Student deleted successfully");
        displayFun(studentDataArr);
      }
    });

    td6.classList.add("td6");
    if (item.attendance === "present") {
      td6.innerHTML = "<button>Present</button>";
    } else if (item.attendance === "absent") {
      td6.innerHTML = "<button id='absent'>Absent</button>";
    } else {
      td6.append(btn1, btn2);
    }
    td6.append(btn3);

    tr.append(td1, td2, td3, td4, td6);

    document.querySelector("#tbody").append(tr);
  });
}

function searchStudent() {
  var searchValue = document.getElementById("searchBar").value.toLowerCase();
  var filteredData = studentDataArr.filter(function (student) {
    return student.regNo.toLowerCase().includes(searchValue);
  });
  displayFun(filteredData);
}

function confirmLogout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "index.html";
  }
}

displayFun(studentDataArr);
