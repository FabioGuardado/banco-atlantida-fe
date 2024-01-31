import {
  DataGrid as MaterialDataGrid,
  GridNoRowsOverlay,
} from '@mui/x-data-grid';

import useTransacciones from '@/hooks/useTransacciones';

import getTransaccionesDataGridColumns from '@/constants/columnasListaDeTransacciones';

import styles from './TransaccionesDataGrid.module.css';

const TransaccionesDataGrid = ({ tarjetaDeCreditoId }) => {
  const { data } = useTransacciones(tarjetaDeCreditoId);
  return (
    <div className={styles.transaccionesDataGridContainer}>
      <MaterialDataGrid
      getRowId={(row) => row.numeroDeAutorizacion}
        rows={data ?? []}
        columns={getTransaccionesDataGridColumns()}
        hideFooter
        slots={{
          noRowsOverlay: GridNoRowsOverlay,
        }}
      />
    </div>
  );
};

export default TransaccionesDataGrid;
