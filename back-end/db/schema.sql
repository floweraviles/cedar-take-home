DROP TABLE IF EXISTS timeslots;

CREATE TABLE timeslots (
    id SERIAL PRIMARY KEY, 
    doctor, TEXT,
    reason_for_visit TEXT,
    date TEXT
);