import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import img1 from '../asset/Background1.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      NctDreamStore
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useAxiois = axios.create({
  baseURL: "http://10.254.0.20:8080",
  timeout: 10000,
  withCredentials: true,
});

const defaultTheme = createTheme({});

export default function SignInSide() {
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    useAxiois.post("/user/login", { userId: data.get('userId'), password: data.get('password') }).then((response) => {
      console.log(response.data['flag']);
      if (response.data['flag'] === 2) {
        const data = { key: response.data['userName'] };
        navigate('/',{
          state: {
            name: response.data['userName'],
          }
        });
      } else if (response.data['flag'] === 1) {
        alert("비밀번호가 일치하지 않습니다");
      } else {
        alert("회원 정보가 없습니다");
      }
    }).catch((error) => {
      console.error("로그인 요청 중 에러가 발생했습니다:", error);
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#c2e2fe',
          backgroundImage: `url(${img1})`,
          backgroundRepeat: 'no-repeat',
          //backgroundColor: (t) =>
           // t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Paper
            elevation={6}
            sx={{
              p: 4,
              maxWidth: '500px',
              width: '100%',
              position: 'relative',
              backgroundColor: 'rgba(255, 255, 255, 0.2)', // White with 85% opacity
              borderRadius: '60px'
            }}
          >
          <Box sx={{
              position: 'absolute',
              top: 30,
              right: 30,
              display: 'flex',
              gap: '8px'
            }}
          >
            <Box sx={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: 'white',
              boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)'
            }} />
            <Box sx={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: '#93e3ff',
              boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)'
            }} />
            <Box sx={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: '#53b5ff',
              boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)'
            }} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" style={{color:'yellow', fontSize:'1.5rem'}}>
               LOGIN
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="userId"
                label="ID"
                name="userId"
                autoComplete="userId"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="PW"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="outlined" // Set variant to outlined to get the border
                
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: 'transparent', // Set background color to transparent
                  borderColor: '#87C1F5', // Border color, adjust as necessary
                  color: 'primary.main', // Text color to match the border
                  borderRadius: '30px',
                  position: 'relative', // To position the pseudo-element
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.04)', // Slight hover effect, optional
                    borderColor: 'primary.main', // Maintain border color on hover
                  },
                  '&::after': {
                    content: '""',
                    width: '35px',
                    height: '35px',
                    bgcolor: 'white',
                    borderRadius: '50%',
                    position: 'absolute',
                    left: '0.1px',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  },
                }}
              >
                Login
              </Button>
              <Box display="flex" justifyContent="space-between" width="100%">
                <Link href="/" variant="body2">
                  {"메인으로"}
                </Link>
                <Link href="/regist" variant="body2">
                  {"회원가입"}
                </Link>
              </Box>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
