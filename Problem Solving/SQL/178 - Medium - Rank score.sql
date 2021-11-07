select score,
    DENSE_RANK() OVER (
        ORDER BY s.score DESC
    ) as 'rank'
from scores as s;