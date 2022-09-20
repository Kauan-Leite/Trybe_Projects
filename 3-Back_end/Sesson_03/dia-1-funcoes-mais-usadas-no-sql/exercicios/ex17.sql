SELECT last_name, first_name, hire_date
FROM hr.employees
WHERE hire_date BETWEEN '1987-07-01' AND '1987-07-31';

-- Ou 
SELECT LAST_NAME _NAME, HIRE_DATE
FROM hr.employees
WHERE MONTH(HIRE_DATE)=7 and YEAR(HIRE_DATE)=1987;