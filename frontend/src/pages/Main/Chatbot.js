import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const loadBotpress = async () => {
      try {
        // Remove existing chatbot container if it exists
        const existingChatbot = document.getElementById('botpress-chatbot');
        if (existingChatbot) {
          existingChatbot.innerHTML = ''; // Clear previous chatbot instance
        }

        // Force reload Botpress scripts
        const botpressContainer = document.getElementById('botpress-container');
        if (botpressContainer) {
          botpressContainer.innerHTML = ''; // Clear previous script container
        }

        // Load Botpress inject script
        const script1 = document.createElement('script');
        script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
        script1.async = true;
        document.body.appendChild(script1);

        await new Promise(resolve => {
          script1.onload = resolve;
        });

        // Load Botpress config script
        const script2 = document.createElement('script');
        script2.src = 'https://mediafiles.botpress.cloud/886f560b-4f0a-4442-9e97-0ae21b511455/webchat/config.js';
        script2.defer = true;
        document.body.appendChild(script2);

        // Ensure the state is cleared after loading the scripts
        script2.onload = () => {
          if (window.WebChat) {
            window.WebChat.clearState(); // Call Botpress-specific method to clear state
          }
        };
      } catch (error) {
        console.error('Error loading Botpress scripts:', error);
      }
    };

    loadBotpress();

    return () => {
      // Clean up scripts if needed
      const script1 = document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v1/inject.js"]');
      const script2 = document.querySelector('script[src="https://mediafiles.botpress.cloud/886f560b-4f0a-4442-9e97-0ae21b511455/webchat/config.js"]');
      if (script1) document.body.removeChild(script1);
      if (script2) document.body.removeChild(script2);
    };
  }, []);

  return (
    <div id="botpress-container">
      <div id="botpress-chatbot">
        {/* Chatbot will be injected here */}
      </div>
    </div>
  );
};

export default Chatbot;
