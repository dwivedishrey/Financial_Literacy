// src/pages/Main/Components/Chatbot/config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar';
import StartBtn from './StartBtn';
import './Chatbot.css';
const config = {
    botName: "ArthaGuru",
    initialMessages: [
        createChatBotMessage("Namaste! I'm ArthaGuru, here to provide you with insightful financial advice. How can I assist you on your financial journey today?"),
        createChatBotMessage("You can ask about Investment, Budgeting, Loans, or Savings."),
        createChatBotMessage(
            "If you need personalized advice, you can connect with a financial advisor. ",
            {
                widget: "connectAdvisor",
            }
        )
    ],
    customComponents: {
        botAvatar: (props) => <Avatar {...props} />,
    },
    state: {
        Queries: {
            investment: {
                link: "https://www.investopedia.com/terms/i/investment.asp"
            },
            budgeting: {
                link: "https://www.nerdwallet.com/article/finance/how-to-budget"
            },
            loans: {
                link: "https://www.investopedia.com/terms/l/loan.asp"
            },
            savings: {
                link: "your_login_page_url"
            }
        }
    },
    widgets: [
        {
            widgetName: "startBtn",
            widgetFunc: (props) => <StartBtn {...props} />,
        },
        {
            widgetName: "connectAdvisor",
            widgetFunc: () => (
                <div>
                     <a className="advisor-link" href="/login" target="_blank" rel="noopener noreferrer">
                        Connect
                    </a>
                </div>
            ),
        }
    ]
};

export default config;
