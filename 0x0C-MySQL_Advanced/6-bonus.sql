DELIMITER $$
CREATE PROCEDURE AddBonus(IN user_id INTEGER, IN project_name VARCHAR(255), IN score INTEGER)
BEGIN
    DECLARE project_id INTEGER;
    -- check if project already exists
    SELECT id INTO project_id FROM projects WHERE name = project_name;
    -- if project does not exist, insert it
    IF project_id IS NULL THEN
        INSERT INTO projects (name) VALUES (project_name);
        SET project_id = LAST_INSERT_ID();
    END IF;
    -- insert the correction
    INSERT INTO corrections (user_id, project_id, score) VALUES (user_id, project_id, score);
END$$
DELIMITER ;
