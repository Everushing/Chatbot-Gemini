// src/components/ChatBot.tsx
import React, { useState, useEffect, useRef } from 'react';
import axios, { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { UserProfile } from '../types';
import { mockUserProfile } from '../mockData';
import i18n from '../i18n'; // Import i18n instance
import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatBot: React.FC = () => {
  const { t } = useTranslation(); // Access translations via useTranslation hook

  const [inputText, setInputText] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<{ sender: string; message: string; type: 'text' | 'image' }[]>([]);
  const [response, setResponse] = useState<string | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    // Simulate fetching user profile from a backend or storage
    // For demo purposes, use mock data
    setUserProfile(mockUserProfile);
  }, []);

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);

  const sendMessage = async () => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY; // Access API key from environment variables
      const response = await axios.post(
        'https://api.gemini.ai/v1/chat',
        {
          message: inputText,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      // Determine the type of message (text or image)
      const messageType: 'text' | 'image' = response.data.type === 'image' ? 'image' : 'text';

      const newChatHistory = [...chatHistory, { sender: 'user', message: inputText, type: messageType }];
      setChatHistory(newChatHistory);
      setResponse(response.data.message);
      setInputText('');
    } catch (error) {
      console.error('Error fetching response:', error);
      handleErrorResponse(error);
    }
  };

  const handleErrorResponse = (error: any) => {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<any>;
      if (axiosError.code === 'ERR_NETWORK') {
        setResponse('Network Error: Please check your internet connection.');
      } else if (axiosError.response) {
        console.error('Response Data:', axiosError.response.data);
        console.error('Response Status:', axiosError.response.status);
        setResponse(`Error: ${axiosError.response.status} - ${axiosError.response.data.error}`);
      } else if (axiosError.request) {
        console.error('Request Error:', axiosError.request);
        setResponse('Network Error: Failed to send request.');
      } else {
        console.error('Error Message:', axiosError.message);
        setResponse('Unexpected Error: Please try again later.');
      }
    } else {
      console.error('Unexpected Error:', error);
      setResponse('Unexpected Error: Please try again later.');
    }
  };

  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      await sendMessage(); // Await the sendMessage function call
    }
  };

  const renderMessage = (chat: { sender: string; message: string; type: 'text' | 'image' }) => {
    const messageClass = chat.sender === 'user' ? 'UserMessage' : 'BotMessage';
    return (
      <div className={`ChatMessage ${messageClass}`} key={chat.message}>
        {chat.type === 'text' ? (
          <span>{chat.message}</span>
        ) : chat.type === 'image' ? (
          <img src={chat.message} alt="Image" />
        ) : null}
      </div>
    );
  };

  // Function to handle changing language
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng).catch((error) => {
      console.error('Error changing language:', error);
    });
  };

  return (
    <div className="ChatBotContainer">
      <h1 className="ChatBotHeader">{t('Ask Me A Question')}</h1>
      <div className="ChatHistoryContainer">
        {chatHistory.map((chat, index) => (
          <div className={`ChatMessage ${chat.sender === 'user' ? 'UserMessage' : 'BotMessage'}`} key={index}>
            {renderMessage(chat)}
          </div>
        ))}
        <div ref={chatRef}></div>
      </div>
      <div className="InputContainer">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="InputField"
          placeholder={t('send')}
        />
        <button onClick={sendMessage} className="SendButton">
          {t('send')}
        </button>
      </div>
      {response && <div className="BotResponseContainer">{response}</div>}
      {userProfile && (
        <div className="UserProfileContainer">
          <h3>{t('userProfile')}</h3>
          <p>
            <strong>{t('nameLabel')}</strong> {userProfile.name}
          </p>
          <p>
            <strong>{t('themeLabel')}</strong> {t(`preferences.theme.${userProfile.preferences.theme}`)}
          </p>
          <p>
            <strong>{t('languageLabel')}</strong> {t(`preferences.language.${userProfile.preferences.language}`)}
          </p>
        </div>
      )}
      <div className="LanguageSelectionContainer">
        <h3>{t('language')}</h3>
        <button onClick={() => changeLanguage('en')} className="LanguageButton">
          English
        </button>
        <button onClick={() => changeLanguage('fr')} className="LanguageButton">
          French
        </button>
        {/* Add more buttons for other languages as needed */}
      </div>
    </div>
  );
};

export default ChatBot;

