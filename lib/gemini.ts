import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.GOOGLE_API_KEY) {
  throw new Error("GOOGLE_API_KEY environment variable is required");
}

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// Use the same model that works in your other project
export const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export default genAI;