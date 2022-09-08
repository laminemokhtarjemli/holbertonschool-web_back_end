-- Script that divide the first number by the second, or return 0
DELIMITER

DROP FUNCTION IF EXISTS SafeDiv;
CREATE FUNCTION SafeDiv(a INT, b INT) RETURNS FLOAT DETERMINISTIC BEGIN IF b = 0 THEN RETURN 0;
END IF;
RETURN a / b;
END;
DELIMITER;