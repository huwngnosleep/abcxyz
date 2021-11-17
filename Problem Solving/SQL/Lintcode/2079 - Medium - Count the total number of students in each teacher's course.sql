select
    tc.teacher_name,
    case
        when sum(student_count) is not null then sum(student_count)
        when sum(student_count) is null then 0
    end as student_count
from
    (select 
        t.name as teacher_name,
        c.student_count as student_count
    from teachers as t
    left join courses as c
        on t.id = c.teacher_id) as tc
group by teacher_name