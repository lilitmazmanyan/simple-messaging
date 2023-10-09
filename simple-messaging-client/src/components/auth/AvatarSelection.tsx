import React from 'react';
import {AvatarSelectionProps} from '../../types/props';
import Avatar1 from './avatars/avatar1.png';
import Avatar2 from './avatars/avatar2.png';
import Avatar3 from './avatars/avatar3.png';
import Avatar4 from './avatars/avatar4.png';
import Avatar5 from './avatars/avatar5.png';
import './AvatarSelection.scss';

export default function AvatarSelection({onSelectAvatar}: AvatarSelectionProps) {
    const handleAvatarSelection = (avatar: string) => {
        onSelectAvatar(avatar);
    };

    const avatarOptions = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];

    return (
        <div>
            <h2>Select an Avatar:</h2>
            <div className="avatar-options">
                {avatarOptions.map((avatar) => (
                    <img
                        key={avatar}
                        src={avatar}
                        alt={avatar}
                        onClick={() => handleAvatarSelection(avatar)}
                    />
                ))}
            </div>
        </div>
    );
}
