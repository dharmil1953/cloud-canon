import fs from "fs";
import path from "path";

export function getContent(fileName: string) {
  try {
    if (!fileName) {
      throw new Error("❌ Error: File name is required.");
    }

    const filePath = path.resolve(process.cwd(), "content", fileName);

    if (!fs.existsSync(filePath)) {
      console.error(`❌ Error: File not found at ${filePath}`);
      return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");

    return JSON.parse(fileContents);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("❌ Unexpected Error:", error.message);
    } else {
      console.error("❌ An unknown error occurred.");
    }
    return null;
  }
}
