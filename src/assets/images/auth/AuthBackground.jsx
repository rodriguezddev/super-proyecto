// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LoginBackground from 'components/loginBackground/LoginBackground';

// ==============================|| AUTH BLUR BACK SVG ||============================== //

export default function AuthBackground() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'absolute',
        //filter: 'blur(18px)',
        zIndex: -1,
        bottom: 0,
        transform: 'inherit'
      }}
    >
      <LoginBackground />
    </Box>
  );
}
