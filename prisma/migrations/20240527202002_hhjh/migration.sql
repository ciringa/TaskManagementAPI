-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tasks" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "CreatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Title" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Slug" TEXT NOT NULL,
    "Completed" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Tasks" ("CreatedAt", "Description", "Id", "Slug", "Title") SELECT "CreatedAt", "Description", "Id", "Slug", "Title" FROM "Tasks";
DROP TABLE "Tasks";
ALTER TABLE "new_Tasks" RENAME TO "Tasks";
PRAGMA foreign_key_check("Tasks");
PRAGMA foreign_keys=ON;
