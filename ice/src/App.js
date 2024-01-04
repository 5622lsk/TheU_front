import "./jun.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import MainPage from './pages/mainpage';
import ProfileSetup from './pages/profilesetup'; // ProfileSetup 컴포넌트 임포트
import Profiledetails from './pages/profileDetails'
import Room from "./pages/Room";
import StepPage from './pages/StepContainer';

const App = () => {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile-setup" element={<ProfileSetup />} /> // ProfileSetup 컴포넌트에 대한 라우트 추가
        <Route path="/profile-details" element={<Profiledetails />} /> 
        








        <Route path="/room" element={<Room />} />
        <Route path="/step-page/*" element={<StepPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
