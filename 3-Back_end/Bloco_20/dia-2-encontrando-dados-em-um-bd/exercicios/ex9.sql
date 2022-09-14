/* 9) Escreva uma query que exiba a string "O projeto name precisou de hours horas
para ser concluído." para cada projeto. */

SELECT CONCAT('O Projeto ', name, ' precisou de ', hours, ' horas para ser concluido') FROM Scientists.Projects;