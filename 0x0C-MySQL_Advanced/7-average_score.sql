DELIMITER $$
CREATE PROCEDURE ComputeAverageScoreForUser(IN user_id INTEGER)
BEGIN
    DECLARE total_score FLOAT;
    DECLARE num_corrections INTEGER;
    DECLARE average_score FLOAT;

    -- calculate total score for user
    SELECT SUM(score) INTO total_score FROM corrections
    WHERE user_id = user_id;

    -- calculate number of corrections for user
    SELECT COUNT(*) INTO num_corrections FROM corrections
    WHERE user_id = user_id;

    -- calculate average score for user
    SET average_score = total_score / num_corrections;

    -- store average score in users table
    UPDATE users SET average_score = average_score
    WHERE id = user_id;
END$$
DELIMITER ;
