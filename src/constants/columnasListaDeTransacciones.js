import moment from "moment";

import formatearAMoneda from "../utils/formatearAMoneda";

const getTransaccionesDataGridColumns = () => [
  {
    field: 'numeroDeAutorizacion',
    headerName: 'Número de Autorización',
    width: 250,
  },
  { field: 'fecha', headerName: 'Fecha', width: 200, renderCell: ({ value }) => moment(value).format("DD-MM-YYYY") },
  { field: 'descripcion', headerName: 'Descripción', width: 400 },
  {
    field: 'monto',
    headerName: 'Cargo',
    width: 150,
    renderCell: ({ value }) => value !== null ? formatearAMoneda(value) : '',
  },{
    field: 'abono',
    headerName: 'Abono',
    width: 150,
    renderCell: ({ value }) => value !== null ? formatearAMoneda(value) : '',
  },
];

export default getTransaccionesDataGridColumns;