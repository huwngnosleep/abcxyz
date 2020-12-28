var moment = require('moment');

// Viết hàm kiểm tra 1 ngày có phải là cuối tuần hay không
function isWeekend (date) {
  var answer = false;
  var day = new Date(date);
  var dayIndex = day.getDay()
  if (dayIndex === 5 && dayIndex === 6) {var answer = true};
  console.log (answer)}
isWeekend('2019/10/28'); 

// Viết hàm trả về số ngày chênh lệch giữa 2 ngày bất kì
function dayDifferential(day1, day2) {
  var date1 = new Date(day1);
  var date2 = new Date(day2);
  var ms1 = date1.getTime();
  var ms2 = date2.getTime();
  var msDifferential = ms1 - ms2;
  var dayDifferential = msDifferential / 86400000;
  if(dayDifferential < 0) {console.log(-dayDifferential)}
  else {console.log(dayDifferential)}
};
dayDifferential('2019/10/17', '2019/10/21');

// Viết hàm trả về 1 ngày trong quá khứ cách ngày được truyền vào n ngày
function subtractDays(date, n) { 
  var x = moment().subtract(n, 'days').calendar();;
  console.log(x);
};
subtractDays('2020/11/17', 5);

// Tính số ms chênh lệch giữa date b và date a 
function msDifferential(day1, day2) {
  var date1 = new Date(day1);
  var date2 = new Date(day2);
  var ms1 = date1.getTime();
  var ms2 = date2.getTime();
  var msDifferential = ms1 - ms2;
  if(msDifferential < 0) {console.log(-msDifferential)}
  else {console.log(msDifferential)}
};
msDifferential("02/10/2019", "10/10/2019");