// Students Manager App
var fs = require('fs');
var readLineSync = require('readline-sync');
var students = [];

function loadData(){
    var data = fs.readFileSync('./data.json');
    students = JSON.parse(data);
};
loadData();

function sortStudentFunction() {
    students.sort(function(student1, student2){ 
    return Number(student1.stdCode.slice(1, )) - Number(student2.stdCode.slice(1, ))
    });
}
function showMenu(){
    console.log('1. Show students list');
    console.log('2. Add new student');
    console.log('3. Find student')
    console.log('4. Save and exit');
};
function showStudentsList(){
    if (students.length == 0) {
      console.log('Please add new student!!!');
      addNewStudent()
    };
    sortStudentFunction();
    for (var i = 0, l = students.length; i < l; i++){
        console.log(students[i])
    };
    main();
};
function addNewStudent(){
    var stdCode = readLineSync.question('Student code? \n');
    for (var i = 0, l = students.length; i < l; i++) {
      if (stdCode == students[i].stdCode){console.log('This code is duplicated!!!\nReturning menu...')
      main()}
    };
    var fullName = readLineSync.question('Full name? \n');
    var phoneNumber = readLineSync.question('Phone number? \n');
    var newStudent = {  stdCode: stdCode,
                        fullName: fullName,
                        phoneNumber: parseInt(phoneNumber)};
    students.push(newStudent);
    console.log('Added!')
    main();
};
function findStudent(student) {
    var target = {}; // student who is found
    var wrongTimeCount = 0; // used if input is not exist
    if (students.length == 0) {
      console.log('Please add new student!!!\n');
      addNewStudent()
    };
    var studentCode = readLineSync.question('Student code? \n');
    // find function
    for (var i = 0, l = students.length; i < l; i++) {
      if (students[i].stdCode === studentCode) {
        target = students[i];
        console.log(students[i]);
        wrongTimeCount = 0
        break;
      }
      else {
      wrongTimeCount += 1;
      }
    };
    if (wrongTimeCount !== 0) {
      console.log("Can't find that student!!!\nCheck your input again...")
      main();
    };
    console.log('1. Edit student info');
    console.log('2. Delete student');
    console.log('3. Nothing...(Return home) \n');
    var input = readLineSync.question('What would you like to do? \n');
    switch (input) {
      case '1': editStudentInfo(target);
        break;
      case '2': deleteStudent(target);
        break;
      case '3': main();
        break;
    }
}
function editStudentInfo(target){
    var newStdCode = readLineSync.question('New student code? \n')
    var newName = readLineSync.question('New name? \n');
    var newPhoneNumber = readLineSync.question('New phone number? \n');
    var editedStudent = {
        stdCode: newStdCode,
        fullName: newName,
        phoneNumber: parseInt(newPhoneNumber),
    };
    students.splice(students.indexOf(target),1);
    students.push(editedStudent);
    console.log('Edited!\n');
    main();
};
function deleteStudent(target){
    console.log('Deleted', '"',target.fullName,'"\n');
    students.splice(students.indexOf(target),1);
    main();
};
function saveAndExit(){
    var data = JSON.stringify(students);
    fs.writeFileSync('./data.json', data, {encoding: 'utf8'});
    process.exit();
};
function main () {
    if (students.length == 0) {
      console.log("There's no student now! \nPlease add new student\n");
    };
    showMenu();
    var option = readLineSync.question('Your choice? \n');
    switch (option) {
      case '1': showStudentsList();
          break;
      case '2': addNewStudent();
          break;
      case '3': findStudent();
          break;
      case '4': saveAndExit();
          break;
      default: console.log('Wrong option!!! \n');
               main();
          break;
    };
};
main();