import axios from 'axios';

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage, stateRef, createCustomMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }
   
    async generateAIResponse(question) {
        // Display loading message
        const loadingMessage = this.createChatBotMessage("Searching for answer...");
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, loadingMessage],
        }));

        try {
            const response = await axios({
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.REACT_APP_KEY}`,
                method: "post",
                data: {
                    contents: [{
                        parts: [{
                            text: question
                        }]
                    }],
                }
            });

            const answer = response.data.candidates[0].content.parts[0].text;

            const message = this.createChatBotMessage(answer);
            this.setState((prev) => ({
                ...prev,
                messages: [...prev.messages, message],
            }));
        } catch (error) {
            console.error("Error generating AI response:", error);
            const errorMessage = this.createChatBotMessage("Sorry, I'm currently unable to provide an answer. Please try again later.");
            this.setState((prev) => ({
                ...prev,
                messages: [...prev.messages, errorMessage],
            }));
        }
    }

    handleUserMessage = (message) => {
        // Send user message to AI and get response
        this.generateAIResponse(message);
    }
}

export default ActionProvider;
