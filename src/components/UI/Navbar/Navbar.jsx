'use client';
import Image from 'next/image'
import { Box, Toolbar, Stack } from '@mui/material';

import NavLink from '../NavLink/NavLink';

import ROUTES from '../../../constants/routes';

import bancoAtlantidaLogo from '../../../assets/banco-atlantida-logo.png';

const Navbar = () => {
  return ( 
    <Box sx={{ bgcolor: '#d7282f' }}>
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Stack direction="row" alignItems="center">
          <Image src={bancoAtlantidaLogo} alt="Banco Atlantida logo" height={40} />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: '200px' }}
        >
          <NavLink to={ROUTES.HOME}>Listado de Tarjetas</NavLink>
        </Stack>
      </Toolbar>
    </Box>
   );
}
 
export default Navbar;