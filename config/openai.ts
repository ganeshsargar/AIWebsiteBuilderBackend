// import OpenAI from "openai";
// import "dotenv/config";

// if (!process.env.OPENROUTER_API_KEY) {
//   throw new Error("OPENROUTER_API_KEY environment variable is required");
// }

// const openai = new OpenAI({
//     baseURL: "https://openrouter.ai/api/v1",
//     apiKey: process.env.OPENROUTER_API_KEY,
// });

// export default openai;


import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.GOOGLE_API_KEY) {
  throw new Error("GOOGLE_API_KEY environment variable is required");
}

const openai = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// Use the same model that works in your other project
export const model = openai.getGenerativeModel({ model: "gemini-2.5-flash" });

export default openai;