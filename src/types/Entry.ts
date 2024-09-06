import type Emoji from "./Emoji";

export default interface Entry {
    body: string;
    emoji: Emoji | null;
    createdAt: Date;
    userId: number;
    id: number;
}