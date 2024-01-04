import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../wood.css'; // Make sure this path is correct

const MainPage = () => {
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    navigate('/profile-setup');
  };

  return (
    <div className="main-container">
      <div className="button-container">
        <div className="circle">
        </div>
        <div className="dot"></div>
      </div>
      <button onClick={handleCreateRoom} className="create-room-button">방 만들기</button>
    </div>
  );
};

export default MainPage;