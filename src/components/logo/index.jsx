import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css'

// material-ui
import { ButtonBase } from '@mui/material';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

// project import
import config from 'config';
import logo from 'assets/images/icons/logo.png';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to, w }) => {
  return (
    <ButtonBase className="ta" disableRipple component={Link} to={!to ? config.defaultPath : to} style={{ height: '10rem' }}>
      <Stack direction="row" spacing={1} alignItems="center" style={{ padding: '0.5rem'}}>
        <img src={logo} alt="" style={{ width: w ? w : '9rem' }} />
      </Stack>
    </ButtonBase>
  );
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string,
  w: PropTypes.string
};

export default LogoSection;
