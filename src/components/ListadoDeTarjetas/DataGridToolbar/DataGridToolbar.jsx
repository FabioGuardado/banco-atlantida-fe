import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Box, Stack, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

import styles from './DataGridToolbar.module.css';

const DataGridToolbar = () => {
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get('searchString') || '',
  );

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchValue.replace(' ', '').length) {
      const currentSearchParams = new URLSearchParams(searchParams);
      currentSearchParams.delete('searchString');
      currentSearchParams.append('searchString', searchValue);
      window.location = `/?${currentSearchParams.toString()}`;
    }
  };

  const handleClearFilter = () => {
    const currentSearchParams = new URLSearchParams(searchParams);
    currentSearchParams.delete('searchString');
    window.location = `/?${currentSearchParams.toString()}`;
  };

  return (
    <div className={styles.dataGridToolbarContainer}>
      <div className={styles.searchbarContainer}>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
          <TextField
            fullWidth
            size="small"
            placeholder="Buscar por número de tarjeta, nombres, apellidos"
            onChange={handleChange}
            sx={{ bgcolor: 'white' }}
          />
        </Box>
        <Stack direction="row">
        <Button
          type='submit'
          variant="contained"
          startIcon={<SearchIcon />}
          onClick={handleSearchClick}
          sx={{
            boxShadow: 'none',
            textTransform: 'capitalize',
            marginLeft: '1rem',
            bgcolor: '#d7282f',
            '&:hover': { bgcolor: '#b7161b' },
          }}
        >
          Buscar
        </Button>
        <Button
          variant="contained"
          startIcon={<ClearIcon />}
          onClick={handleClearFilter}
          sx={{
            boxShadow: 'none',
            textTransform: 'capitalize',
            marginLeft: '1rem',
            bgcolor: '#5b5b5b',
            '&:hover': { bgcolor: '#443f3f' },
          }}
        >
          Limpiar
        </Button>
        </Stack>
      </div>
    </div>
  );
};

export default DataGridToolbar;
