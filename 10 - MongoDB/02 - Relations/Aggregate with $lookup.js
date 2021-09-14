// author: {_id: "abcd", name: "abcddfadw"}
// book: {authors: ["id1", "id2"]}

db.books.aggregate([{$lookup: {
	from: "authors",
	localField: "authors",
	foreignField: "_id",
	as: "creators"
}}])

{
	_id: "....",
	...
	creators: [
		{
			"_id": "..."
		}
	]

}