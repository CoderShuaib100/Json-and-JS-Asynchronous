// creating a object

var employee = {
    id: 023,
    name: "Anonymous",
    PhoneNumber: 9291230123,
    designation: "CEO" 
}
// assuming employee as emp
var empJSON = JSON.stringify(employee);
var NewEmp = JSON.parse(empJSON);

document.write(NewEmp.name);

document.getElementById("CardTitle").innerHTML = employee.name
document.getElementById("Para").innerHTML = "ID: "+employee.id + "<br> Phone Number: " + employee.PhoneNumber + "<br> Designation: CEO";

// async await functions

async function add(a,b) {
    var answer = await a+b;
    display(answer);
}

function display(result) {
    document.write("<br>"+result);
}

add(52,43);

// callback function

// making the displayer function

function displayer(value) {
    document.write("<br>"+value);
}

function calculator(num1,num2,callbacker) {
    var sum = num1+num2;
    callbacker(sum);
}

calculator(512,256,displayer);