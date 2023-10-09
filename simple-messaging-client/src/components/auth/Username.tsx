import React, {useState} from 'react';
import AvatarSelection from './AvatarSelection';
import {UserInputProps} from '../../types/props';

export default function UsernameInput({setUsername, setAvatar}: UserInputProps) {
    const [inputText, setInputText] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState('');

    const handleSetAvatar = (selectedAvatar: string) => {
        setAvatar(selectedAvatar);
        setSelectedAvatar(selectedAvatar);
    }
    const handleSetUsername = () => {
        if (inputText.length >= 2) {
            setUsername(inputText);
            setInputText('');
        }
    };

    return (
        <div>
            <label>
                Enter your username:
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
            </label>
            <AvatarSelection onSelectAvatar={handleSetAvatar}/>
            <button onClick={handleSetUsername} disabled={!inputText || !selectedAvatar}>Continue to chat</button>
        </div>
    );
}
