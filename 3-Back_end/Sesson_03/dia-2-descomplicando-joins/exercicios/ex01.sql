USE pixar;

SELECT
    m.title, b.domestic_sales, b.international_sales
FROM
    movies m
        INNER JOIN
    boxoffice b ON b.movie_id = m.id;