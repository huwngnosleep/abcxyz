// projection is to use an argument for find() method
// to filter field of objects returned

// get only name
db.users.find({}, {name: 1})
// {"_id": "abcd", name: "abcd"}

db.users.find({}, {name: 1, _id: 0})
// {name: "abcd"}