var student=[];
function Submit(){
    var first=document.getElementById("name1").value;
    var second=document.getElementById("name2").value;
    var third=document.getElementById("name3").value;
    var fourth=document.getElementById("name4").value;
    student.push(first);
    student.push(second);
    student.push(third);
    student.push(fourth);
    console.log(student);
    document.getElementById("display").innerHTML=student;
    document.getElementById("Submit").style.display="none";
    document.getElementById("Sort").style.display="inline-block";
}

function sorting(){
    student.sort();
    document.getElementById("display").innerHTML=student;
}