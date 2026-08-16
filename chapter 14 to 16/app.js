// question No 1
var studentName = []
console.log(studentName)
// question No 2
var studentName =  Array ()
console.log(studentName)
// question No 3
var string = ["apple" , "mango" , "banana" , "grapes"]
console.log(string) 
// question No 4
var number = [10,20,30,40,50]
console.log(number)
// question No 5
var boolean = [true,false,true,false]
console.log(boolean)
// question No 6
var mix = ["areesha",50,true,"Pakistan"]
console.log(mix)
// question No 7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("<h2>Educational Qualifications in Pakistan</h2>");
document.write("<ol>");
for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ol>");
// question No 8
var students = ["Michael","John","Tony"]
var totalScore = [450,400,350]
var total = [500]
for(var i= 0; i< students.length; i++){
  var percentage = (totalScore [i] / total)*100
  document.write( "Score of " + students[i] + " is " + totalScore[i] +
    ". Percentage: " + percentage + "%<br>")
}
// question No 9
// part A
var color = ["red","yallow","blue","black","white"]
document.write("<ol>")
for(var i = 0; i < color.length; i++){
    document.write( "<li>" + color[i] + "</li>")
}
document.write("</ol>")
// part B
var color = ["red","yallow","blue","black","white"]
var userColor = prompt("Enter a color you want to add at the beginning")
color.unshift(userColor)
document.write("Updated Array: " + color);
// part C
var color = ["red","yallow","blue","black","white"]
var userColor = prompt("Enter a color you want to add at the beginning")
color.push(userColor)
document.write( "<br>" +"Updated Array: " + color +"</br>");
// part D
var color = ["red","yallow","blue","black","white"]
color.unshift("pink","purple")
document.write("update array: "+ color )
// part E
var color = ["red","yallow","blue","black","white"]
color.shift()
document.write("<br>"+"update array: "+ color + "</br>")
// part F
var color = ["red","yallow","blue","black","white"]
color.pop()
document.write("update array: "+ color )
// part G
var colors = ["Red", "Green", "Blue", "Yellow"];
var index = prompt("At which index do you want to add a color?");
var color = prompt("Enter color name:");
colors.splice(index, 0, color);
document.write("<br>"+ "Updated Array: " + colors + "</br>");
// part H
var colors = ["Red", "Green", "Blue", "Yellow", "Pink"];
var index = prompt("At which index do you want to delete color(s)?");
var number = prompt("How many colors do you want to delete?");
colors.splice(index, number);
document.write("Updated Array: " + colors);
// question No 10
var scores = [320, 230, 480, 120];
document.write("<br>")
document.write( "Scores of Students : " + scores );
document.write("<br>Ordered Scores of Students : " + scores.sort());
// question No 11
document.write("<br>")
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(1, 4);
document.write("Cities: " + cities);
document.write("<br>Selected Cities: " + selectedCities);
// question No 12
var arr = ["This ", "is ", "my ", "cat"];
document.write("<br>")
document.write("Array:<br>");
document.write(arr);

document.write("<br><br>String:<br>");
document.write(arr.join(""));
// question No 13
var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
document.write("Devices:<br>");
document.write(devices);
document.write("<br><br>Out:<br>");
document.write(devices.shift());
document.write("<br><br>Out:<br>");
document.write(devices.shift());
document.write("<br><br>Out:<br>");
document.write(devices.shift());
document.write("<br><br>Out:<br>");
document.write(devices.shift());
// question No 14
var devices = [];

devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
document.write("Devices:<br>");
document.write(devices);
document.write("<br><br>Out:<br>");
document.write(devices.pop());
document.write("<br><br>Out:<br>");
document.write(devices.pop());
document.write("<br><br>Out:<br>");
document.write(devices.pop());
document.write("<br><br>Out:<br>");
document.write(devices.pop());
// question No 15
var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");

document.write("<option></option>");
document.write("<option>" + phones[0] + "</option>");
document.write("<option>" + phones[1] + "</option>");
document.write("<option>" + phones[2] + "</option>");
document.write("<option>" + phones[3] + "</option>");
document.write("<option>" + phones[4] + "</option>");
document.write("<option>" + phones[5] + "</option>");
document.write("<select>");