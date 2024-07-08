// src/i18n.ts

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      hello: 'Hello',
      welcomeMessage: 'Welcome! How can I assist you today?',
      send: 'Send',
      botResponse: 'Bot Response:',
      userProfile: 'User Profile',
      nameLabel: 'Name:',
      themeLabel: 'Theme Preference:',
      languageLabel: 'Language Preference:',
      preferences: {
        theme: {
          light: 'Light',
          dark: 'Dark',
        },
        language: {
          en: 'English',
          fr: 'French',
          es: 'Spanish',
        },
      },
      // Add more translations as needed
    },
  },
  fr: {
    translation: {
      hello: 'Bonjour',
      welcomeMessage: 'Bienvenue ! Comment puis-je vous aider aujourd\'hui ?',
      send: 'Envoyer',
      botResponse: 'Réponse du Bot :',
      userProfile: 'Profil Utilisateur',
      nameLabel: 'Nom :',
      themeLabel: 'Préférence de Thème :',
      languageLabel: 'Préférence de Langue :',
      preferences: {
        theme: {
          light: 'Clair',
          dark: 'Sombre',
        },
        language: {
          en: 'Anglais',
          fr: 'Français',
          es: 'Espagnol',
        },
      },
      // Add more translations as needed
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  interpolation: {
    escapeValue: false, // React already safe from XSS
  },
});

export default i18n;
