// src/pages/Main/Components/Chatbot/MessageParser.js
class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        this.actionProvider.handleUserMessage(message);
    }
}

export default MessageParser;
