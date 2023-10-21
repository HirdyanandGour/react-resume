import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;
const navItems = ['skithngour@gmail.com', '+91 7976335805', 'hirdyanandtech.blogspot.com'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box>
      <CssBaseline />
	  	<Box>
        <Toolbar sx={{ background:'blue', color: '#fff'}}>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Hirdyanand Gour
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
		    <List>
			{navItems.map((item) => (
				<Typography key={item}>
					{item}
				</Typography>
			))}
			</List>
          </Box>
        </Toolbar>
		<hr sx={{color: '#fff'}} />
		<Typography varient="h6">
			Full Stack Developer
		</Typography>
		</Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>

        </Typography>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
