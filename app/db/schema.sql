CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT
);


INSERT INTO projects (image, title, description)
VALUES
  ('https://example.com/image1.jpg', 'Cross', 'Description of Project 1'),
  ('https://example.com/image2.jpg', '$PORK Staking', 'Description of Project 2'),
  ('https://example.com/image3.jpg', 'Dice Game', 'Description of Project 3');


-- Execute command below
-- psql "postgres://<username>:<password>@<host>:<port>/<database>" -f app/db/schema.sql
