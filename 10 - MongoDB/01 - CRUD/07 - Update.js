// just update one document
db.flightData.updateOne({
	_id: ObjectId("abcd"),
	{$set: delayed: true}
})

// update many is the same
db.flightData.updateMany({
	_id: ObjectId("abcd"),
	{$set: delayed: true}
})


// update can replace the whole object with new object
db.flightData.update({
	_id: ObjectId("abcd"),
	{delayed: true}
})
