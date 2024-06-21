import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { FormControl, FormLabel, RadioGroup, Radio } from '@mui/material';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
        김혁수
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Regist() {

    const navigate = useNavigate();
    const [id, setId] = useState('');

    const useAxiois = axios.create({
        baseURL: "http://10.254.0.20:8080",
        timeout: 10000,
        withCredentials: true,
      })
  
  const handleCheck = (event) =>{
    event.preventDefault();
    useAxiois.post('/user/check',{
        userId: id
    }).then((response)=>{
        if(response.data===false){
            alert("사용가능한 ID입니다")
        }else{
            alert("중복된 ID입니다")
        }
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    useAxiois.post('/user/regist',{
        userId: data.get('Id'),
        userName: data.get('Name'),
        gender: data.get('gender'),
        email: data.get('email'),
        password: data.get('password'),
    }).then((response)=>{
        alert("회원가입이 완료되었습니다");
        navigate('/login')
    })
  };

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            회 원 가 입
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={10}>
                <TextField
                  autoComplete="given-name"
                  name="Id"
                  required
                  fullWidth
                  id="Id"
                  label="아이디"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" color="primary" fullWidth onClick={handleCheck}> 중복 체크 </Button>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="이름"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">성별</FormLabel>
                    <RadioGroup row aria-label="gender" name="gender" >
                        <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <FormControlLabel value="0" control={<Radio />} label="남"/>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel value="1" control={<Radio />} label="여"/>
                        </Grid>
                        </Grid>
                    </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="이메일 주소"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              등록
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  로그인
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}