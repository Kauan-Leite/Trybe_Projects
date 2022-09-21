USE pixar;

SELECT
    m.title, b.rating
FROM
    movies m
INNER JOIN
    boxoffice b ON b.movie_id = m.id
ORDER BY b.rating DESC;