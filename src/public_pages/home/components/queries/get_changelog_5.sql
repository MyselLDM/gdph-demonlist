-- This is the query for the changelog
CREATE OR REPLACE FUNCTION get_changelog_5()
RETURNS TABLE(
  type TEXT,
  date TIMESTAMPTZ,
  placement INTEGER,
  level TEXT,
  level_above TEXT,
  level_below TEXT,
  level_extended TEXT,
  level_legacy TEXT
) as $$
BEGIN
RETURN QUERY
SELECT
  c.type,
  c.date,
  c.position,
  (SELECT name from level WHERE level.level_id = c.level_id),
  (SELECT name from level WHERE level.level_id = c.level_id_above),
  (SELECT name from level WHERE level.level_id = c.level_id_below),
  (SELECT name from level WHERE level.level_id = c.level_id_extended),
  (SELECT name from level WHERE level.level_id = c.level_id_legacy)
FROM changelog c LIMIT 5;
END;
$$ LANGUAGE plpgsql

