import React from 'react';
import {Message} from '../types/message.model';
import formatTimestamp from '../utils/formatTimestamp.util';
import './ChatRoom.scss';
import {ChatRoomProps} from '../types/props';

export default function ChatRoom({messages}: ChatRoomProps) {
    return (
        <div className="chat-room">
            <div className="message-container">
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        <div className="avatar">
                            <img src={message.avatar} alt={message.avatar}/>
                        </div>
                        <div className="message-text">
                            <div>From: {message.username}</div>
                            <div>{message.text}</div>
                            <div className="message-timestamp">{message.timestamp}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
