import React, { useState } from 'react';
import '../wood.css';

const Profiledetails = () => {
  const [nameOrNickname, setNameOrNickname] = useState('');
  const [password, setPassword] = useState('');
  const [intro, setIntro] = useState('');

  // ... 여기에 form 제출 핸들러를 추가할 수 있습니다.

  return (
    <div className="profile-details-container">
      <form className="profile-details-form">
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
        <div className="form-group2">
          <label>한줄 소개:</label>
          <input
            className="form-input"
            type="text" placeholder='한줄 소개'
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Profiledetails;