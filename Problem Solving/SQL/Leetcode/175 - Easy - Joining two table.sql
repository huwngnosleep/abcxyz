select FirstName, LastName, City, State 
from person
left outer join address on person.personId = address.personId