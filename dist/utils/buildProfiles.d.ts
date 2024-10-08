import { type Message } from 'discord.js';
export type Profile = {
    author: string;
    avatar?: string;
    roleColor?: string;
    roleIcon?: string;
    roleName?: string;
    bot?: boolean;
    verified?: boolean;
};
export declare function buildProfiles(messages: Message[]): Promise<Record<string, Profile>>;
