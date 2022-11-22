-- STEP 01
SELECT * FROM startups;
-- 10 COLMS
-- STEP 2
SELECT COUNT(DISTINCT name) AS 'Num Companies' FROM startups;
-- 70 diff companies
-- STEP 3
SELECT SUM(valuation) AS 'Total Value of All Companies' FROM startups;
-- Total Value of All Companies = 974455790000
-- STEP 4
SELECT name, MAX(raised) AS 'Highest Amt. Raised' FROM startups;
-- REBU @ 11500000000
-- STEP 5
SELECT name, MAX(raised) AS 'Highest Amt. Raised' FROM startups WHERE stage = 'Seed';
-- Voice2Txt @ 1800000
-- STEP 6
SELECT name, MIN(founded) FROM startups;
-- RICE Media	in 1994
-- STEP 7
SELECT AVG(valuation) FROM startups;
-- 15974685081.9672
-- STEP 8
SELECT category, AVG(valuation) FROM startups GROUP BY category;
-- STEP 9
SELECT category, ROUND(AVG(valuation), 2) FROM startups GROUP BY category;
-- STEP 10
SELECT category, ROUND(AVG(valuation), 2) FROM startups GROUP BY 1 ORDER BY 2 DESC;
-- STEP 11
SELECT category, COUNT(*) FROM startups GROUP BY category;
-- STEP 12
SELECT category, COUNT(*) FROM startups GROUP BY category HAVING COUNT(*) > 3 ORDER BY 2 DESC;
-- STEP 13
SELECT location, AVG(employees) FROM startups GROUP BY location;
-- STEP 14
SELECT location, AVG(employees) FROM startups GROUP BY location HAVING AVG(employees) > 500;