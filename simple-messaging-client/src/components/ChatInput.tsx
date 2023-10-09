import React, {useState, ChangeEvent, KeyboardEvent} from 'react';
import './ChatInput.scss';
import {ChatInputProps} from "../types/props";

export default function ChatInput({onSendMessage}: ChatInputProps) {
    const [inputTextMessage, setInputTextMessage] = useState<string>('');

    const handleClick = () => {
        if (inputTextMessage.trim() !== '') {
            onSendMessage(inputTextMessage);
            setInputTextMessage('');
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputTextMessage(event.target.value);
    };

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    };

    return (
        <div className="chat-input">
            <input
                value={inputTextMessage}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                placeholder="Please type in your message"
            />
            <button onClick={handleClick} disabled={!inputTextMessage.trim()}>
                Send
            </button>
        </div>
    );
}
