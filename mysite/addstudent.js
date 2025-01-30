document.getElementById("form1").addEventListener("submit", submitFun1);

var studentDataArr = JSON.parse(localStorage.getItem("studentData")) || [];

function submitFun1(e) {
    e.preventDefault();
    var name = document.querySelector("#name").value;
    var regNo = document.querySelector("#regNo").value;
    var degree = document.querySelector("#degree").value;

    var studentObj = {
        name: name,
        regNo: regNo,
        degree: degree,
    };

    studentDataArr.push(studentObj);
    localStorage.setItem("studentData", JSON.stringify(studentDataArr));
    document.querySelector("#form1").reset();
    alert("Student Added Successfully");
    window.location.href = 'student.html';
}