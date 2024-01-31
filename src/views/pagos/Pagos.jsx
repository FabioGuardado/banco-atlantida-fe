'use client';

import { useSearchParams } from 'next/navigation';
import { Box, Stack } from '@mui/material';

import InformacionTarjetaYCliente from '@/components/UI/InformacionTarjetaYCliente/InformacionTarjetaYCliente';
import FormularioTransacciones from '@/components/UI/FormularioTransacciones/FormularioTransacciones';

const Pagos = () => {
  const searchParams = useSearchParams();
  const tarjetaDeCreditoId = searchParams.get('tarjetaId');

  return ( 
    <Box>
      <Stack>
        <h1>Registro de Pagos</h1>
      </Stack>

      <InformacionTarjetaYCliente tarjetaId={tarjetaDeCreditoId} />

      <FormularioTransacciones tarjetaDeCreditoId={tarjetaDeCreditoId} isCompra={false}/>
      </Box>
   );
}
 
export default Pagos;