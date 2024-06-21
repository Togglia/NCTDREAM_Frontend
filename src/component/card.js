import React from 'react';
import styled from 'styled-components';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const CardContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  text-align: center;
`;

const ImageWrapper = styled.div`
  background-color: ${props => props.color || 'black'};
  width: 300px;
  height: 350px;
  border-radius: 16px;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const CardImage = styled.img`
  width: 270px;
  height: 270px;
  border-radius: 8px;
`;

const CardText = styled.p`
  margin-top: 12px;
  font-size: 1.3rem;
  color: #333;
`;

const TextContainer = styled.div`
  margin-top: 12px;
  text-align: center;
`;

const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 10px;
`;

function Card({ imageSrc, text1, text2, color, price }) {
  return (
    <CardContainer>
      <ImageWrapper color={color}>
        <div>
          <CardImage src={imageSrc} alt="Card image" />
          <div style={{marginRight:'120px', }}>
            <CardText>{text2}</CardText>
          </div>
          
        </div>
      </ImageWrapper>
      <TextContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CardText>{text1}</CardText>
          <LocalMallIcon />
        </div>
        <PriceContainer>
          <CardText>{price}</CardText>
        </PriceContainer>
      </TextContainer>
    </CardContainer>
  );
}

export default Card;
