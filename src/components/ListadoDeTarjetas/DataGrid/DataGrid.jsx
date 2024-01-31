import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { DataGrid as MaterialDataGrid, GridNoRowsOverlay } from '@mui/x-data-grid';

import useListaDeTarjetas from '@/hooks/useListaDeTarjetas';

import DataGridToolbar from '@/components/ListadoDeTarjetas/DataGridToolbar/DataGridToolbar';
import DataGridPagination from '@/components/UI/DataGridPagination/DataGridPagination';

import getDataGridColumns from '@/constants/columnasListaDeTarjetas';

import styles from './DataGrid.module.css';

const DataGrid = () => {
  const searchParams = useSearchParams();

  const [pageSize] = useState(
    Number(searchParams.get('pageSize')) || 10,
  );

  const [page] = useState(Number(searchParams.get('page')) || 1);

  const [searchString] = useState(
    searchParams.get('searchString') || undefined,
  );

  const { data } = useListaDeTarjetas(page, pageSize, searchString);

  const handlePageChange = (e, newPage) => {
    e?.preventDefault();

    const currentSearchParams = new URLSearchParams(searchParams);
    currentSearchParams.delete('page');
    currentSearchParams.append('page', `${newPage + 1}`);
    window.location = `/?${currentSearchParams.toString()}`;
  };

  const handleRowsPerPageChange = event => {
    const currentSearchParams = new URLSearchParams(searchParams);
    currentSearchParams.delete('pageSize');
    currentSearchParams.append('pageSize', event.target.value);
    window.location = `/?${currentSearchParams.toString()}`;
  };

  return (
    <div className={styles.dataGridContainer}>
      <DataGridToolbar />

      <MaterialDataGrid
        rows={data?.items ?? []}
        columns={getDataGridColumns()}
        hideFooter
        slots={{
          noRowsOverlay: GridNoRowsOverlay,
        }}
      />

      <DataGridPagination
        count={data?.totalCount ?? 0}
        page={page - 1}
        rowsPerPage={pageSize}
        disableNextButton={!data?.hasNextPage}
        disablePrevButton={!data?.hasPreviousPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </div>
  );
};

export default DataGrid;
