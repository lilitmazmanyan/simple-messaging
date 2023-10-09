import {Message} from "./message.model";

export interface ChatInputProps {
    onSendMessage: (message: string) => void;
}

export interface AvatarSelectionProps {
    onSelectAvatar: (avatar: string) => void;
}

export interface ChatRoomProps {
    messages: Message[];
}

export interface UserInputProps {
    setUsername: (username: string) => void
    setAvatar: (avatar: string) => void
}