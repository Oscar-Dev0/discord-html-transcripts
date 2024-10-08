import { type GuildMember, type Message, type User } from 'discord.js';
import React from 'react';
export default function SystemMessage({ message }: {
    message: Message;
}): Promise<React.JSX.Element | undefined>;
export declare function Highlight({ children, color }: {
    children: React.ReactNode;
    color?: string;
}): React.JSX.Element;
export declare function JoinMessage({ member, fallbackUser }: {
    member: GuildMember | null;
    fallbackUser: User;
}): (string | React.JSX.Element)[];
