### GeoJSON is used for location data

create a location
```
db.places.insertOne({
	name: "Califorina Academy",
	location : {
		type: "Point",
		coordinates: [-122.4724, 37.7672]
	}
})
```

geolocation data need an geo index to be queried

```
db.places.createIndex({location: "2dsphere"})
```

query place

```
db.places.find({location: ${$near: {$geometry: {type: "Point", coordinates: [-122.4711, 37.7711]}} }})
```

find a place inside an area

```
db.places.find({
	location: {
		$geoWithin: {
			$geometry: {
				type: "Polygon",
				coordinates: [[p1, p2, p3, p4]]
			}
		}
	}
})		
```