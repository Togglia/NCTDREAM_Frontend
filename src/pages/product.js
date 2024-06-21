import React from 'react';
import styled from 'styled-components';
import pro1 from '../asset/pro1.png';
import pro2 from '../asset/pro2.png';
import pro3 from '../asset/pro3.jpg';
import Card from '../component/card';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

const StyledTop = styled.div`
  display: flex;
  width: 100%;
  margin: 20px;
  margin-left: 3%;
  position: absolute;
  height: 5%;
  top: 0;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 70%;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 10px;
  margin-left: 165px;
`;

const BlueLine = styled.hr`
  flex-grow: 1.0;
  background-color: skyblue;
  color: skyblue;
  height: 1px;
  margin-left: 10px;
  margin-right: 165px;
`;

function Product() {
  const navigate = useNavigate();

  const handleBack = (event) => {
    navigate(-1);
  };

  return (
    <MainWrapper>
      <StyledTop>
        <ArrowBackIcon onClick={handleBack} />
      </StyledTop>
      <TitleWrapper>
        <Title>NCT DREAM PRODUCT</Title>
        <BlueLine />
      </TitleWrapper>
      <Container>
        <Card
          imageSrc={pro1}
          text1="The 1st Album - Hot Sauce (Jewel Case Ver.)"
          text2="Another text"
          price="₩ 13,600"
          color="#F1FF89"
        />
        <Card
          imageSrc={pro2}
          text1="The 1st Album Repackage - Hello Future (Kit Ver.)"
          text2="Another text"
          price="₩ 23,800"
          color="#FFCCFF"
        />
        <Card
          imageSrc={pro3}
          text1="The 2nd Album - Glitch Mode (Glitch Ver.)"
          text2="Another text"
          price="₩ 13,600"
          color="#8CFCF7"
        />
      </Container>
    </MainWrapper>
  );
}

export default Product;
