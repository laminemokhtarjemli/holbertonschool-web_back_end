CREATE PROCEDURE ComputeAverageWeightedScoreForUser(user_id INT)
BEGIN
  DECLARE total_weight INT;
  DECLARE total_score INT;

  SELECT SUM(weight) INTO total_weight
  FROM courses
  WHERE user_id = user_id;

  SELECT SUM(score * weight) INTO total_score
  FROM courses
  WHERE user_id = user_id;

  IF total_weight > 0 THEN
    UPDATE users
    SET average_weighted_score = total_score / total_weight
    WHERE id = user_id;
  END IF;
END;
