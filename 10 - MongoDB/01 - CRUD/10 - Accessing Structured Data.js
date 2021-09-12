// filter array having that element
db.users.find({bobbies: "sport"})

{
	"_id": ObjectId("abcd"),
	"name": "abcd",
	"hobbies": [
		"hobbies",
		"cooking"
	]
}

// filter to nested object
db.users.find({"status.description": "on-time"})

{
	"_id": ObjectId("abcd"),
	"name": "abcd",
	"status": {
		"description": "on-time"
	}

}