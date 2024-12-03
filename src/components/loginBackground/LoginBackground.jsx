import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css'

// material-ui
import { ButtonBase } from '@mui/material';
import Stack from '@mui/material/Stack';

// project import
import config from 'config';
import backogroundLogin from 'assets/images/icons/login-fondo.jpg';

// ==============================|| MAIN LOGO ||============================== //

const LoginBackground = ({ sx, to }) => {
  return (
    <ButtonBase className='ta' disableRipple component={Link} to={!to ? config.defaultPath : to} style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <Stack direction="row" spacing={1} alignItems="center" style={{ padding: '0.5rem', width: '100%', height: '100%' }}>
        <img src={backogroundLogin} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
      </Stack>
    </ButtonBase>
  );
};

LoginBackground.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LoginBackground;