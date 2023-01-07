CREATE VIEW band_lifespans AS
  SELECT band_name, (split - formed) AS lifespan
  FROM metal_bands;

    SELECT band_name, lifespan
FROM band_lifespans
WHERE main_style = 'Glam rock'
ORDER BY lifespan DESC;
