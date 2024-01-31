import moment from "moment";

import formatearAMoneda from "../utils/formatearAMoneda";

const getDataGridColumns = () => [
  {
    field: 'numeroDeAutorizacion',
    headerName: 'Número de Autorización',
    width: 380,
  },
  { field: 'fecha', headerName: 'Fecha', width: 200, renderCell: ({ value }) => moment(value).format("DD-MM-YYYY") },
  { field: 'descripcion', headerName: 'Descripción', width: 400 },
  {
    field: 'monto',
    headerName: 'Monto',
    width: 200,
    renderCell: ({ value }) => formatearAMoneda(value),
  },
];

export default getDataGridColumns;