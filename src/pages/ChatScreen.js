import React, { useState } from 'react';
import './ChatScreen.css'; // Optional styling

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessageToOpenAI = async (userMessage) => {
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a friendly anime character who chats with users.' },
            { role: 'user', content: userMessage },
          ],
        }),
      });

      const data = await res.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI API error:', error);
      return 'Oops! Something went wrong.';
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const newUserMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);

    const botReply = await sendMessageToOpenAI(input);

    const newBotMessage = { sender: 'bot', text: botReply };
    setMessages((prev) => [...prev, newBotMessage]);
    setIsLoading(false);
  };

  return (
    <div className="chat-screen" style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Chat with Your Anime Character</h2>
      <div style={{ marginBottom: '20px', maxHeight: '400px', overflowY: 'auto' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: '10px', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '10px 15px',
                borderRadius: '20px',
                backgroundColor: msg.sender === 'user' ? '#4f46e5' : '#e5e5ea',
                color: msg.sender === 'user' ? 'white' : 'black',
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
        {isLoading && <p>Typing...</p>}
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{ flex: 1, padding: '10px', borderRadius: '10px' }}
        />
        <button onClick={handleSend} style={{ padding: '10px 20px', borderRadius: '10px' }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
