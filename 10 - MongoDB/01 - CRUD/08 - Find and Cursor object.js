// find return a cursor, not the element itself
db.users.find()

// because this collection can be very big, thit will has negative effect on performance
db.users.find().forEach((user) => {printjson(user)})

// other methods suchas delete, update dont need the cursor object because they dont fetch the data
