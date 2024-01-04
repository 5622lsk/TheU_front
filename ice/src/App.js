import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainpage';
import ProfileSetup from './pages/profilesetup'; // ProfileSetup 컴포넌트 임포트
import Profiledetails from './pages/profileDetails'
import Room from "./pages/Room";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile-setup" element={<ProfileSetup />} /> // ProfileSetup 컴포넌트에 대한 라우트 추가
        <Route path="/profile-details" element={<Profiledetails />} /> 
        <Route path="/room" element={<Room />} />
      </Routes>
    </Router>
  );
};

export default App;