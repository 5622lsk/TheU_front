import React from 'react';
import styled from 'styled-components';

const getRandomColor = () => {
  // 랜덤 RGB 색상 생성
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
  return randomColor;
};

const StyledCard = styled.div`
  width: 130px;
  height: 200px;
  background: ${(props) =>
    props.backgroundColor || `linear-gradient(45deg, ${getRandomColor()}, ${getRandomColor()})`};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;

  .profile {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: -50px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .intro {
    color: #fff;
    font-size: 14px;
    text-align: center;
  }

  .name {
    color: #fff;
    font-size: 13px;
    font-weight: bold;
  }
`;

const Card = ({ title, mbti, age, hobby, name, photo }) => {
  return (
    <StyledCard>
      <div className="profile">
        <img src={photo} alt="Profile" />
      </div>
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="intro">
        <p>{title}</p>
        <p>MBTI: {mbti}</p>
        <p>나이: {age}</p>
        <p>취미: {hobby}</p>
      </div>
    </StyledCard>
  );
};

export default Card;