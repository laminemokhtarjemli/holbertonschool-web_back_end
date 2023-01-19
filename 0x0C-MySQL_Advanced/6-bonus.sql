CREATE PROCEDURE AddBonus (IN user_id INT, IN project_name VARCHAR(255), IN score INT)
AS
BEGIN
    DECLARE project_id INT;
    -- check if project already exists
    SELECT id INTO project_id FROM projects WHERE name = project_name;
    -- if project does not exist, insert it
    IF project_id IS NULL 
    BEGIN
        INSERT INTO projects (name) VALUES (project_name);
        SELECT SCOPE_IDENTITY() INTO project_id;
    END
    -- insert the correction
    INSERT INTO corrections (user_id, project_id, score) VALUES (user_id, project_id, score);
END
