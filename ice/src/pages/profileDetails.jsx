import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../wood.css';

const ProfileDetails = () => {
  const [nameOrNickname, setNameOrNickname] = useState('');
  const [password, setPassword] = useState('');
  const [intro, setIntro] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    // 입력 데이터를 처리하고 이동합니다.
    // 여기에서 추가 데이터 처리나 검증을 수행할 수 있습니다.
    navigate('/profile-details2', { state: { nameOrNickname, password, intro } });
  };

  return (
    <div className="profile-setup-container">
      <form className="profile-setup-form">
      <div className="form-group">
          <label>이름/닉네임:</label>
          <input
            className="form-input"
            type="text" placeholder='이름/닉네임'
            value={nameOrNickname}
            onChange={(e) => setNameOrNickname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>유저 비밀번호:</label>
          <input
            className="form-input"
            type="text" placeholder='유저 비밀번호'
            maxLength="4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>한줄 소개:</label>
          <input
            className="form-input"
            type="text" placeholder='한줄 소개'
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleNext} className="form-submit-button">
          다음
        </button>
      </form>
    </div>
  );
};

export default ProfileDetails;