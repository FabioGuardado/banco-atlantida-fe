'use client';

import { useParams } from 'next/navigation';
import { Box, Stack } from '@mui/material';

import InformacionGeneral from '../../components/EstadoDeCuenta/InformacionGeneral/InformacionGeneral';
import ComprasDataGrid from '@/components/EstadoDeCuenta/ComprasDataGrid/ComprasDataGrid';

const EstadoDeCuenta = () => {
  const { id: tarjetaDeCreditoId } = useParams();

  return (
    <Box>
      <Stack>
        <h1>Estado de Cuenta de TC</h1>
      </Stack>

      <InformacionGeneral tarjetaDeCreditoId={tarjetaDeCreditoId} />

      <ComprasDataGrid tarjetaDeCreditoId={tarjetaDeCreditoId} />

    </Box>
  );
};

export default EstadoDeCuenta;
