-- script that creates a procedure AddBonus
-- that adds a new correction.
DELIMITER
DROP PROCEDURE IF EXISTS AddBonus;
CREATE PROCEDURE AddBonus(
  IN user_id INT,
  IN project_name VARCHAR(225),
  IN score INT
) BEGIN IF EXISTS(
  SELECT *
  FROM projects
  WHERE name = project_name
  LIMIT 1
) THEN
SET @pr_id = (
    SELECT id
    FROM projects
    WHERE name = project_name
    LIMIT 1
  );
ELSE
INSERT INTO projects (name)
VALUES (project_name);
SET @pr_id = LAST_INSERT_ID();
END IF;
INSERT INTO corrections (user_id, pr_id, score)
VALUES (user_id, @pr_id, score);
END //
DELIMITER;