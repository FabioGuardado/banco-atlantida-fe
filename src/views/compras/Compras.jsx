'use client';

import { useSearchParams } from 'next/navigation';
import { Box, Stack } from '@mui/material';

import InformacionTarjetaYCliente from '@/components/UI/InformacionTarjetaYCliente/InformacionTarjetaYCliente';
import FormularioTransacciones from '@/components/UI/FormularioTransacciones/FormularioTransacciones';

const Compras = () => {
  const searchParams = useSearchParams();
  const tarjetaDeCreditoId = searchParams.get('tarjetaId');

  return ( 
    <Box>
      <Stack>
        <h1>Registro de Compra</h1>
      </Stack>

      <InformacionTarjetaYCliente tarjetaId={tarjetaDeCreditoId} />

      <FormularioTransacciones tarjetaDeCreditoId={tarjetaDeCreditoId} isCompra/>
      </Box>
   );
}
 
export default Compras;