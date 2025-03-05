import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s AI assistant. I'm here to assist you with selecting the perfect pair of Warby Parker glasses. I can help you find styles that suit your taste, explain different lens options, or answer any questions about Warby Parker in general!`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble coming up with a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
