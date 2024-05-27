-- CreateTable
CREATE TABLE "Tasks" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "CreatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Title" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "CompletionDate" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Tasks_Title_key" ON "Tasks"("Title");
