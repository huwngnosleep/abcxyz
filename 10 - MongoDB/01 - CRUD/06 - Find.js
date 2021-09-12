// find with condition
// find all flights that have distance greater than 10000
db.flightData.find({distance: {$gt: 10000}})