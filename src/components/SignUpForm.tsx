// SignUpForm.tsx

import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [signupError, setSignupError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', formData);
      localStorage.setItem('token', response.data.token);
      window.location.href = '/userprofiles'; // Redirect to user profiles page after successful signup
    } catch (error: any) {
      console.error('Error signing up:', error.response.data.error);
      setSignupError('Failed to sign up'); // Set error message
      // Handle error (show message to user, clear form fields, etc.)
    }
  };

  return (
    <div className="signup-form-container">
      <h2>Sign Up</h2>
      {signupError && <p className="error-message">{signupError}</p>}
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="form-input"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="form-input"
        />
        <button type="submit" className="form-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;

