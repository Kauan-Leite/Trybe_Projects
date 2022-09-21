USE pixar;

SELECT
    m.title,
    (b.domestic_sales + b.international_sales) AS "Vendas"
FROM
    movies m
        INNER JOIN
    boxoffice b ON b.movie_id = m.id
WHERE
    b.international_sales > b.domestic_sales;