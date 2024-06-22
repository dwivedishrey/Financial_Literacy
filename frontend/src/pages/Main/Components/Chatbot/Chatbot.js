// src/pages/Main/Components/Chatbot/Chatbot.js
import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './Chatbot.css';
import config from './config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';

const ChatbotComponent = () => {
    const [showChatbot, setShowChatbot] = useState(false);
   

    const handleToggle = () => {
        setShowChatbot(!showChatbot);
    };
   
    return (
        <div className="chatbot-toggle-container">
            <div className="chatbot-toggle-button" onClick={handleToggle}>
                {showChatbot ? (
                    <div className="cross">×</div>
                ) : (
                    <>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </>
                )}
            </div>
            {showChatbot && (
                <div className="chatbot-container">
                    <Chatbot
                        config={config}
                        actionProvider={ActionProvider}
                        messageParser={MessageParser}
                    />
                </div>
            )}
        </div>
    );
};

export default ChatbotComponent;
