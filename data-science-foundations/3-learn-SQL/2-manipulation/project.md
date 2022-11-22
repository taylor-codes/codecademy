# Create a Table

In this project, you will create your own friends table and add/delete data from it!

## Step 1

Create a table named friends with three columns:
- id that stores INTEGER
- name that stores TEXT
- birthday that stores DATE

```sql
CREATE TABLE friends (
  id INTEGER,
  name TEXT,
  birthday DATE
);
```

## Step 2

Add Ororo Munroe to friends. Her birthday is May 30th, 1940.

```sql
INSERT INTO friends (id, name, birthday) VALUES (1, 'Ororo Munroe', '1940-05-30');
```

## Step 4

Add two of your friends to the table. Insert an id, name, and birthday for each of them.

```sql
INSERT INTO friends (id, name, birthday) VALUES (2, 'Colin Morris', '1996-09-29');

INSERT INTO friends (id, name, birthday) VALUES (3, 'Holly Hearn', '1997-08-07');
```

## Step 5

Ororo Munroe just realized that she can control the weather and decided to change her name. Her new name is “Storm”. Update her record in friends.

```sql
UPDATE friends SET name = 'Storm' WHERE id = 1;
```

## Step 6

Add a new column named email.

```sql
ALTER TABLE friends ADD COLUMN email TEXT;
```

## Step 7


Update the email address for everyone in your table. Storm’s email is storm@codecademy.com.

```sql
UPDATE friends SET email = 'storm@codecademy.com' WHERE id = 1;

UPDATE friends SET email = 'cm@codecademy.com' WHERE id = 2;

UPDATE friends SET email = 'hh@codecademy.com' WHERE id = 3;
```

## Step 8

Wait, Storm is fictional… Remove her from friends.

```sql
DELETE FROM friends WHERE id = 1;

SELECT * FROM friends;
```