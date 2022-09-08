-- script that lists all students with a score under 80 and no meetings in the past month
DROP VIEW IF EXISTS need_meeting;
CREATE VIEW need_meeting AS
SELECT name
FROM students
WHERE SCORE < 80
AND last_meeting IS NULL
OR last_meeting < dte_SUB(NOW(), INTERVAL 1 MONTH);