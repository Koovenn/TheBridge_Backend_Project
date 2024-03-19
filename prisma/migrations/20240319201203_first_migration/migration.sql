-- CreateTable
CREATE TABLE "Characters" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "element" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Characters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Weapons" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "ATK" INTEGER NOT NULL,
    "CRIT" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "characterID" TEXT NOT NULL,

    CONSTRAINT "Weapons_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Weapons" ADD CONSTRAINT "Weapons_characterID_fkey" FOREIGN KEY ("characterID") REFERENCES "Characters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
