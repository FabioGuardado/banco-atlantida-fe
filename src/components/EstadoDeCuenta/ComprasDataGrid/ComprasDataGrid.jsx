import { Box, Stack } from '@mui/material';
import { DataGrid as MaterialDataGrid, GridNoRowsOverlay } from '@mui/x-data-grid';

import useCompras from '@/hooks/useCompras';

import getDataGridColumns from '../../../constants/columnasListaDeCompras';
import ResumenInferiorDeCompras from '../ResumenInferiorDeCompras/ResumenInferiorDeCompras';

const ComprasDataGrid = ({tarjetaDeCreditoId}) => {

  const { data } = useCompras(tarjetaDeCreditoId);

  return ( 
    <Box sx={{ marginBottom: '4rem', marginTop: '2rem' }}>
      <Stack sx={{ marginBottom: '1rem' }}>
      <h2>Resumen de Compras</h2>
      </Stack>
      <MaterialDataGrid
        rows={data?.compras ?? []}
        columns={getDataGridColumns()}
        hideFooter
        slots={{
          noRowsOverlay: GridNoRowsOverlay,
        }}
      />

      <ResumenInferiorDeCompras data={data} />
    </Box>
   );
}
 
export default ComprasDataGrid;