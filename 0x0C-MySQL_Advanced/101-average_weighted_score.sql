CREATE PROCEDURE ComputeAverageWeightedScoreForUsers()
BEGIN
  DECLARE done INT DEFAULT FALSE;
  DECLARE user_id INT;
  DECLARE cursor_users CURSOR FOR SELECT id FROM users;

  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

  OPEN cursor_users;

  read_loop: LOOP
    FETCH cursor_users INTO user_id;
    IF done THEN
      LEAVE read_loop;
    END IF;

    CALL ComputeAverageWeightedScoreForUser(user_id);
  END LOOP;

  CLOSE cursor_users;
END;
