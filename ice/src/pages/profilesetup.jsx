import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../wood.css'

const ProfileSetup = () => {
  const [roomInfo, setRoomInfo] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [meetDate, setMeetDate] = useState('');
  const [nameOrNickname, setNameOrNickname] = useState('');
  const [password, setPassword] = useState('');
  const [intro, setIntro] = useState('');
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const navigate = useNavigate();

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      roomInfo,
      subTitle,
      meetDate,
      nameOrNickname,
      password,
      intro,
      questions,
    });
    // 서버로 데이터를 보내는 로직을 여기에 추가
  };
  // 새 질문을 추가하는 핸들러
  const handleAddQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions([...questions, newQuestion]);
      setNewQuestion(''); // 입력 필드를 비우기
    }
  };

  // 질문 입력 필드 변경 핸들러
  const handleQuestionChange = (event) => {
    setNewQuestion(event.target.value);
  };

  const handleNextClick = () => {
    // 여기서 입력 데이터를 적절히 처리하고 이동합니다.
    navigate('/profile-details');
  };

  return (
    <div className="profile-setup-container">
      <form onSubmit={handleSubmit} className="profile-setup-form">
      <div className="form-group">
          <label>방 정보:</label>
          <input
            className="form-input"
            type="text" placeholder='방 제목'
            value={roomInfo}
            onChange={(e) => setRoomInfo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>방 소제목:</label>
          <input
            className="form-input"
            type="text" placeholder='방 소제목'
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>만나는 날짜:</label>
          <input
            className="form-input"
            type="text" placeholder='00월 00일'
            value={meetDate}
            onChange={(e) => setMeetDate(e.target.value)}
          />
        </div>
        <div className="details-section">
        <div className="form-group">
          <label>기본 질문 </label>
          <input
            className="form-input"
            type="text" placeholder='이름/닉네임'
            value={nameOrNickname}
            onChange={(e) => setNameOrNickname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-input"
            type="text" placeholder='유저 비밀번호'
            maxLength="4"
            value={password}
            onChange={(e) => setPassword(e.target.value.replace(/[^0-9]/g, ''))}
          />
        </div >
        <div className="form-group">
          <input
            type="text"
            placeholder='한줄 소개'
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
            className="form-input"
          />
        </div>
        </div>
        {/* 새로운 질문을 추가하는 입력 필드 */}
        {questions.map((question, index) => (
          <div key={index} className="form-group">
            <label>{`질문 ${index + 1}:`}</label>
            <input className="form-input" type="text" value={question} readOnly />
          </div>
        ))}
        <div className="form-group">
          <label>질문 추가하기:</label>
          <input
            className="form-input"
            type="text" placeholder='질문을 입력하세요'
            value={newQuestion}
            onChange={handleQuestionChange}
          />
          <button type="button" onClick={handleAddQuestion}>추가</button>
        </div>
        {/* 폼 제출 버튼 */}
        <button type="submit" className="form-submit-button" onClick={handleNextClick}>다음</button>
      </form>
    </div>
  );
};


export default ProfileSetup;