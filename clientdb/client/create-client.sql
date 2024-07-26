CREATE TABLE "client" (
 "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 "firstName" VARCHAR(85) NOT NULL,
 "lastName" VARCHAR(85) NOT NULL,
 "middleName" VARCHAR(85),
 "dateOfBirth" DATE,
 "insuranceNumber" BIGINT UNIQUE NOT NULL,
 "accountNumber" VARCHAR(12) UNIQUE NOT NULL,
 "managerFullName" VARCHAR(255) NOT NULL,
 "status" VARCHAR(14) NOT NULL,
 "managerUserId" INTEGER,
 FOREIGN KEY ("managerUserId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
















