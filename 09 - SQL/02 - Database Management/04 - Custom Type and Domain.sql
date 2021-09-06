create domain Rating smallint
	check (value > 0 and value <= 5)

create type Feedback as (
	student_id UUID,
	rating Rating,
	feedback text
)