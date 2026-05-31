'use client'
import { useState } from 'react';
import { TextField, Button, Box, Typography, InputAdornment, IconButton, Divider } from '@mui/material';
import { Visibility, VisibilityOff, Mic, AudioFile, GraphicEq, MicNone } from '@mui/icons-material';
import { motion } from 'motion/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { userSignup } from '@/redux/feature/auth/authAction';


export default function Signup() {
  const dispatch = useAppDispatch();
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName]= useState('');
  const [username,setUsername] = useState('')
  const { loading, user } = useAppSelector((state)=>state.auth)

  const handleSingup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, name, username });
    dispatch(userSignup({name,username,email,password}))
  };

  return (
    <Box className="flex min-h-screen">
      {/* Left Side - Branding */}
      <Box className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <Box className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 left-20"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <GraphicEq sx={{ fontSize: 120 }} className="text-white" />
          </motion.div>
          <motion.div
            className="absolute bottom-40 right-32"
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <AudioFile sx={{ fontSize: 100 }} className="text-white" />
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-1/3"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            <MicNone sx={{ fontSize: 80 }} className="text-white" />
          </motion.div>
        </Box>

        <Box className="relative z-10 flex flex-col justify-center px-16 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box className="flex items-center gap-3 mb-8">
              <Box className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
                <Mic sx={{ fontSize: 48 }} />
              </Box>
              <Typography variant="h3" className="font-bold">
                TranscribeX
              </Typography>
            </Box>

            <Typography variant="h4" className="mb-6 font-semibold leading-tight">
              Transform speech into text with AI precision
            </Typography>

            <Typography variant="h6" className="opacity-90 mb-8 font-light leading-relaxed">
              Real-time transcription, speaker identification, and smart formatting for all your audio content.
            </Typography>

            <Box className="flex gap-8 mt-12">
              <Box>
                <Typography variant="h3" className="font-bold mb-1">99.5%</Typography>
                <Typography className="opacity-80">Accuracy</Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* Right Side - Login Form */}
      <Box className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Box className="bg-white rounded-3xl shadow-2xl p-10">
            <Box className="mb-8">
              <Typography variant="h4" className="font-bold text-gray-900 mb-2">
                Welcome back
              </Typography>
              <Typography variant="body1" className="text-gray-500">
                Sign in to continue to your transcripts
              </Typography>
            </Box>

            <form onSubmit={handleSingup}>
              <Box className="space-y-2 ">
                <Box>
                  <Typography variant="body2" className="text-gray-600 mb-2 font-medium">
                    Name
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter you name"
                    type="text"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="email"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        backgroundColor: '#f9fafb',
                        '&:hover fieldset': {
                          borderColor: '#8b5cf6',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#8b5cf6',
                        },
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Typography variant="body2" className="text-gray-600 mb-2 font-medium">
                    Username
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="enter unique username"
                    type="text"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    autoComplete="email"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        backgroundColor: '#f9fafb',
                        '&:hover fieldset': {
                          borderColor: '#8b5cf6',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#8b5cf6',
                        },
                      },
                    }}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" className="text-gray-600 mb-2 font-medium">
                    Email address
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="you@example.com"
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        backgroundColor: '#f9fafb',
                        '&:hover fieldset': {
                          borderColor: '#8b5cf6',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#8b5cf6',
                        },
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Box className="flex items-center justify-between mb-2">
                    <Typography variant="body2" className="text-gray-700 font-medium">
                      Password
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-violet-600 cursor-pointer hover:text-violet-700 font-medium"
                    >
                      Forgot?
                    </Typography>
                  </Box>
                  <TextField
                    fullWidth
                    placeholder="Enter your password"
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        backgroundColor: '#f9fafb',
                        '&:hover fieldset': {
                          borderColor: '#8b5cf6',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#8b5cf6',
                        },
                      },
                    }}
                    slotProps={{
                      input:{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                            aria-label="toggle password visibility"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }
                    }}
                  />
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  className="py-3.5 rounded-xl shadow-lg normal-case font-semibold"
                  sx={{
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                    },
                    transition: 'all 0.2s',
                  }}
                >
                  Sign in
                </Button>

                <Divider className="my-6">
                  <Typography variant="body2" className="text-gray-400">
                    or
                  </Typography>
                </Divider>

                <Button
                  fullWidth
                  variant="outlined"
                  size="large"
                  className="py-3.5 rounded-xl normal-case font-semibold border-gray-300"
                  onClick={()=>{
                    window.location.href = 'http://localhost:4000/api/google'
                  }}
                  sx={{
                    textTransform: 'none',
                    fontSize: '1rem',
                    borderColor: '#d1d5db',
                    color: '#374151',
                    '&:hover': {
                      borderColor: '#8b5cf6',
                      backgroundColor: '#f9fafb',
                    },
                  }}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%234285F4' d='M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z'/%3E%3Cpath fill='%2334A853' d='M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z'/%3E%3Cpath fill='%23FBBC05' d='M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z'/%3E%3Cpath fill='%23EA4335' d='M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z'/%3E%3C/svg%3E"
                    alt="Google"
                    className="w-5 h-5 mr-3"
                  />
                  Continue with Google
                </Button>

                <Box className="text-center pt-4">
                  <Typography variant="body2" className="text-gray-600">
                    Already Have an Account?{' '}
                    <span onClick={()=>router.push('/login')} className="text-violet-600 cursor-pointer hover:text-violet-700 font-semibold">
                      Login
                    </span>
                  </Typography>
                </Box>
              </Box>
            </form>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
