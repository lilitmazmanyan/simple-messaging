import React, {useEffect, useState} from 'react';
import {io, Socket} from 'socket.io-client';
import ChatInput from './components/ChatInput';
import ChatRoom from './components/ChatRoom';
import {Message} from './types/message.model';
import UsernameInput from './components/auth/Username';
import './App.scss';
import formatTimestamp from "./utils/formatTimestamp.util";

export default function App() {
    const [socket, setSocket] = useState<Socket | undefined>();
    const [messages, setMessages] = useState<Message[]>([]);
    const [avatar, setAvatar] = useState<string>('');
    const [username, setUsername] = useState<string>('');

    const send = (messageText: string) => {
        if (socket && username) {
            const message: Message = {
                avatar,
                username,
                text: messageText,
                timestamp: formatTimestamp(new Date()),
            };
            socket.emit('message', message);
        }
    };

    const messagesListener = (message: Message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    useEffect(() => {
        const newSocket = io(`http://localhost:8080`);

        newSocket.on('connect_error', (error) => {
            console.error('WebSocket connection error:', error);
        });

        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, [setSocket]);

    useEffect(() => {
        socket?.on('message', messagesListener);

        return () => {
            socket?.off('message', messagesListener);
        };
    }, [socket, messagesListener]);

    return (
        <div className="app-container">
            <div className="username-container">
                {!username && <UsernameInput setUsername={setUsername} setAvatar={setAvatar}/>}
            </div>
            {username && (
                <div className="chat-container">
                    <ChatInput onSendMessage={send}/>
                    <ChatRoom messages={messages}/>
                </div>
            )}
        </div>
    );
}
