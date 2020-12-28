// Tra ve thuoc tinh cua mot object
// Constructor function
function Student (name, gender){
    this.name = name;
    this.gender = gender;
    this.age = 18;
};
function returnProp(){
    var student1 = new Student('Hung', 'male');
    return console.log(student1)
};
returnProp();

console.log('============');

// Xoa thuoc tinh cua mot object
function deleteProp(){
    var student2 = new Student('Hoa', 'female');
    delete student2.age;
    return console.log(student2);
};
deleteProp();

console.log('============');

// Viet ham dem so thuoc tinh
function countProperty(){
    var student3 = new Student('Nhi', 'female');
    var i = 0;
    for (var prop in student3){
      i = i + 1;
    };
    console.log(i);
};
countProperty();