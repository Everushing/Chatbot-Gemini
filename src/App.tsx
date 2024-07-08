import React, { useState, useEffect }  from 'react';
import './App.css';
import ChatBot from './components/ChatBot';
import { BrowserRouter, Routes, Route,Link  } from 'react-router-dom';
import UserProfilePage from './pages/UserProfilePage';
import SignUpForm from './components/SignUpForm'; // Adjust path as per your project structure
import LoginForm from './components/LoginForm'; // Adjust path as per your project structure
import axios from 'axios';
import SideNav from './components/SideNav';

interface UserProfile {
  _id: string;
  name: string;
  preferences: {
    theme: string;
    language: string;
  };
}



const App: React.FC = () => {
  const [userProfiles, setUserProfiles] = useState<UserProfile[]>([]);

  useEffect(() => {
    // Fetch user profiles from API or other source
    const fetchUserProfiles = async () => {
      try {
        const response = await axios.get('/api/userprofiles');
        setUserProfiles(response.data); // Assuming response.data is an array of user profiles
      } catch (error) {
        console.error('Error fetching user profiles:', error);
        // Handle error fetching data (show message to user, retry logic, etc.)
      }
    };

    fetchUserProfiles();
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat Buddy AI</h1>
      </header>
      <main className="App-main">
      <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <SideNav />

      
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul> */}
        </div>
     
     <div>
     <Routes>  
     <Route path="/" element={<ChatBot />} />
     <Route path="/userprofilepage" element={<UserProfilePage />} />
     <Route path="/userprofilepage/:id" element={<UserProfilePage />} />
     <Route path="/login" element={<LoginForm />} /> {/* Route to Contact page */}
     <Route path="/signup" element={<SignUpForm />} /> 
      {/* <Route path="*" element={<NotFoundPage />} /> */}
       </Routes>
     
     </div>
   </BrowserRouter>
 
      </main>
    </div>
  );
};

export default App;

