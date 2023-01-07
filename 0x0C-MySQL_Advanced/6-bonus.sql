DELIMITER $$

CREATE PROCEDURE AddBonus (IN user_id INT, IN project_name VARCHAR(255), IN score INT)
BEGIN
  -- Check if the project name already exists in the projects table
  DECLARE project_id INT;
  SELECT id INTO project_id FROM projects WHERE name = project_name;

  -- If the project does not exist, insert a new row into the projects table
  IF project_id IS NULL THEN
    INSERT INTO projects (name) VALUES (project_name);
    SET project_id = LAST_INSERT_ID();
  END IF;

  -- Insert a new row into the corrections table with the provided user_id, project_id, and score
  INSERT INTO corrections (user_id, project_id, score) VALUES (user_id, project_id, score);
END$$

DELIMITER ;
