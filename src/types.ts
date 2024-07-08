// src/types.ts

export interface UserProfile {
    id: string;
    name: string;
    preferences: {
      theme: 'light' | 'dark';
      language: 'en' | 'fr' | 'es';
    };
  }
  