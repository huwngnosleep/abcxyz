// Danh ba dien thoai
var fs = require('fs');
var readLineSync = require('readline-sync');
var openMenu = require('./menu.js');


var contactList = [];

function loadData(){
    var data = fs.readFileSync('./data.json');
    contactList = JSON.parse(data);
};
loadData();
function showContactList(){
    console.log(contactList);
    main();
};
function newContact(){
    var name = readLineSync.question('What is your name? \n');
    var phoneNumber = readLineSync.question('What is your phonenumber? \n');
    var contact = {
        name: name,
        phoneNumber: parseInt(phoneNumber),
    };
    contactList.push(contact);
    main();
};
function editContact(contact){
    var newName = readLineSync.question('New name? \n');
    var newPhoneNumber = readLineSync.question('New phonenumber? \n');
    var editedContact = {
        name: newName,
        phoneNumber: parseInt(newPhoneNumber),
    };
    contactList.splice(contactList.indexOf(contact),1);
    contactList.push(editedContact);
    main();
};
function deleteContact(contact){
    contactList.splice(contactList.indexOf(contact),1);
    main();
};
function findContact(contact){
    var input = readLineSync.question('Who you wanna find? \n');
    contactList.find(function(x){
        return x.name == input
    });
    console.log('1. Edit');
    console.log('2. Delete');
    console.log('3. Exit')
    var option = readLineSync.question('What you wanna do? \n')
    switch(option){
        case '1': editContact();
            break;
        case '2': deleteContact();
            break;
        default: saveAndExit();
            break;
    };
};
function saveAndExit(){
    var data = JSON.stringify(contactList);
    fs.writeFileSync('./data.json', data, {encoding: 'utf8'});
};

function main(){
    openMenu();
    var option = readLineSync.question('Your option? \n');

    switch(option){
        case '1': newContact();
            break;
        case '2': findContact();
            break;
        case '3': showContactList();
            break;
        case '4': saveAndExit();
            break;
        default: console.log('Wrong option!!!');
                main();
            break;
        
    };
};
main();