// new promise các kiểu, logic các kiểu
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = true;
    if(responseFromServer) {
      resolve('We got the data')
    } else {  
      reject('Data not received')
    }
});

// đại khái là khi resolve hoặc reject
// thì sẽ pass một cái tham số nào đấy vào hai cái hàm này
// rồi sau đó sẽ sử dụng ở .then bên dưới
// tham số đấy sẽ là result hoặc error
makeServerRequest
    .then(result => console.log(result))
    .catch(error => console.log(error)) 