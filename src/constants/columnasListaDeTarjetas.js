import DataGridButtons from '../components/ListadoDeTarjetas/DataGridButtons/DataGridButtons';

const getDataGridColumns = () => [
  {
    field: 'numeroDeTarjeta',
    headerName: 'Número de tarjeta',
    width: 260,
  },
  { field: 'nombres', headerName: 'Nombres', width: 260, valueGetter: (params) => params.row.cliente.nombres },
  { field: 'apellidos', headerName: 'Apellidos', width: 260, valueGetter: (params) => params.row.cliente.apellidos },
  {
    field: 'options',
    headerName: 'Opciones',
    width: 600,
    renderCell: ({ row }) => <DataGridButtons tarjetaId={row.id} saldoTotal={row.saldoTotal} limite={row.limite}/>,
  },
];

export default getDataGridColumns;