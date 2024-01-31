'use client';

import { useParams } from 'next/navigation';
import { Box, Stack } from '@mui/material';
import TransaccionesDataGrid from '@/components/Transacciones/TransaccionesDataGrid/TransaccionesDataGrid';
import InformacionTarjetaYCliente from '@/components/UI/InformacionTarjetaYCliente/InformacionTarjetaYCliente';

const Transacciones = () => {
  const { id: tarjetaDeCreditoId } = useParams();

  return ( 
    <Box>
      <Stack>
        <h1>Transacciones</h1>
      </Stack>

      <InformacionTarjetaYCliente tarjetaId={tarjetaDeCreditoId} />

      <TransaccionesDataGrid tarjetaDeCreditoId={tarjetaDeCreditoId} />
    </Box>
   );
}
 
export default Transacciones;