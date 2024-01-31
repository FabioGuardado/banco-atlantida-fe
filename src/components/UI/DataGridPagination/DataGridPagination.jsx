import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';

const DataGridPagination = ({
  sx,
  disableNextButton,
  disablePrevButton,
  ...other
}) => {
  return (
    <Box sx={{ position: 'relative', ...sx }}>
      <TablePagination
        labelRowsPerPage="Elementos por página:"
        component="div"
        {...other}
        sx={{
          borderTopColor: 'transparent',
        }}
        nextIconButtonProps={{ disabled: disableNextButton }}
        backIconButtonProps={{ disabled: disablePrevButton }}
      />
    </Box>
  );
}
 
export default DataGridPagination;