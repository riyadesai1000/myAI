import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s AI assistant. I'm here to help you find your ideal pair of Warby Parker glasses. I can display various frame styles, let you compare frames using the "Compare Frames" option in the top-right corner, or answer any general questions you might have about Warby Parker.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble coming up with a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
