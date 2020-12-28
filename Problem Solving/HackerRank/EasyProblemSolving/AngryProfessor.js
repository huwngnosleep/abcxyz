function angryProfessor(k, students) {
    var count = 0;
    for(const student of students) {
        if(student <= 0) {count += 1}
    }
    if (count >= k) {return 'NO'}
    else {return 'YES'}

}