DROP TABLE IF EXISTS "user";

CREATE TABLE "user" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "fullName" VARCHAR ( 255 ), 
  "login" VARCHAR ( 128 ) UNIQUE NOT NULL,
  "password" VARCHAR ( 64 ) NOT NULL
);