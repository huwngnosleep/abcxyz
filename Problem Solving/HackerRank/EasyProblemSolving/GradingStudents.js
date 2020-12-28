function gradingStudents(grades) {
    var result = [];
    for (var grade of grades) {
        if (grade >= 38) {    
            var x = grade % 5;
            switch (x) {
            case 4: result.push(grade + 1);
            break;
            case 3: result.push(grade + 2);
            break;
            default: result.push(grade);
            }
        }
        else {result.push(grade)}
    }
    for (var grade of result) {console.log(grade)}
}