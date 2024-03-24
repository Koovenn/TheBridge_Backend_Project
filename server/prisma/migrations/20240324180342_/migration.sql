/*
  Warnings:

  - A unique constraint covering the columns `[characterID]` on the table `Weapons` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Weapons_characterID_key" ON "Weapons"("characterID");
