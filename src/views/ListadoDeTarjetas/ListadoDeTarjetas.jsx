'use client';

import { Box, Stack } from '@mui/material';

import DataGrid from '../../components/ListadoDeTarjetas/DataGrid/DataGrid';

const ListadoDeTarjetas = () => {
  return (
    <Box>
      <Stack>
        <h1>Listado de Tarjetas</h1>
      </Stack>

      <DataGrid />
    </Box>
  );
};

export default ListadoDeTarjetas;
