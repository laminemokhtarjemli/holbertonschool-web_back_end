-- script that creates a procedure
-- that computes the average score for a student
DELIMITER

DROP PROCEDURE if EXISTS ComputeAverageScoreForUser;
CREATE PROCEDURE ComputeAverageScoreForUser (IN user_id INT) BEGIN
UPDATE users
SET average_score = (
    SELECT AVG(score)
    FROM corrections AS avrg
    WHERE avrg.user_id = user_id
  )
WHERE id = user_id;
END;
DELIMITER;