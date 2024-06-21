import React from 'react';
import styled from 'styled-components';
import  main from '../asset/main.png'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useNavigate,useLocation } from 'react-router-dom';
const StyledMain = styled.div`
    background-color: #C3E7FD;
    height: 100vh;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
`;

const StyledTop = styled.div`
    display: flex;
    width: 100%;
    margin: 20px 0;
    position: absolute;
    height: 5%;
    top: 0;
    justify-content: space-between;
`

const Icons = styled.div`
    display: flex;
    width: 100%;
    margin: 0px;
    height: 5%;
    justify-content: end;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white; 
  height: 100%;
  & > svg {
    font-size: 3rem;
    margin-right: 3vw; 
  }
`;

const MainImage = styled.img`
  width: 60vh;  
  height: auto;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  color: inherit;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;


function Main() {

    const navigate = useNavigate();
    const location = useLocation();
    const data = location?.state?.name??'null';

    console.log(data);

    const handleProduct = (event) => {
        event.preventDefault();
        navigate('/product');
    }

    const handleLogin = (event) => {
        event.preventDefault();
        navigate('/login');
    }

    const handleRegist = (event) => {
        event.preventDefault();
        navigate('/regist');
    }
    const handlelogout = (event) => {
        event.preventDefault();
        navigate('/');
    }


  return (
    <StyledMain>
        <StyledTop>
            <div style={{ display: 'flex', width: '15%', justifyContent: 'space-evenly' }}>
                <div onClick={handleProduct} style={{color:'white', fontSize:'1.5rem'}}><Button>PRODUCT</Button></div>
                <div style={{color:'white', fontSize:'1.5rem'}}>EVENT</div>
            </div>
            <div style={{ display: 'flex', width: '30%', justifyContent: 'space-evenly' }}>
            <div>
                {data === 'null' ? (
                    <div onClick={handleLogin} style={{color:'yellow', fontSize:'1.5rem'}}>
                    <Button>LOGIN</Button>
                    </div>
                ) : (
                    <>
                        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                            <div style={{color:'yellow', fontSize:'1.5rem', marginRight:'30px'}}>{data} 님 환영합니다 ~</div>
                            <div onClick={handlelogout} style={{color:'yellow', fontSize:'1.5rem'}} ><Button>LOGOUT</Button></div>
                        </div>
                    </>
                )}
            </div>
                <div onClick={handleRegist} style={{color:'yellow', fontSize:'1.5rem'}}><Button>JOIN</Button></div>
            </div>
        </StyledTop>
        <Icons>
            <IconWrapper>
                <PersonIcon/>
                <SearchIcon></SearchIcon>
                <LocalMallIcon/>
            </IconWrapper>
        </Icons>
            <MainImage src={main}/>
    </StyledMain>
  );
}

export default Main;