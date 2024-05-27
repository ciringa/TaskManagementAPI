/*
  Warnings:

  - You are about to drop the column `CompletionDate` on the `Tasks` table. All the data in the column will be lost.
  - Added the required column `Slug` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tasks" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "CreatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Title" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Slug" TEXT NOT NULL
);
INSERT INTO "new_Tasks" ("CreatedAt", "Description", "Id", "Title") SELECT "CreatedAt", "Description", "Id", "Title" FROM "Tasks";
DROP TABLE "Tasks";
ALTER TABLE "new_Tasks" RENAME TO "Tasks";
CREATE UNIQUE INDEX "Tasks_Title_key" ON "Tasks"("Title");
PRAGMA foreign_key_check("Tasks");
PRAGMA foreign_keys=ON;
