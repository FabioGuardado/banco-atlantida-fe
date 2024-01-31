import Link from 'next/link';
import { Button } from '@mui/material';

import ROUTES from '../../../constants/routes';

import styles from './DataGridButtons.module.css';

const DataGridButtons = ({ tarjetaId, saldoTotal, limite }) => {
  return (
    <div className={styles.buttonsContainer}>
      <Link href={`${ROUTES.TARJETAS_DE_CREDITO}/${tarjetaId}${ROUTES.ESTADO_DE_CUENTA}`}><Button variant="contained" sx={{ bgcolor: '#0b118c', '&:hover': { bgcolor: '#5055bf' } }}>Estado de Cuenta</Button></Link>
      <Link href={`${ROUTES.COMPRAS}?tarjetaId=${tarjetaId}`}><Button variant="contained" disabled={saldoTotal >= limite} sx={{ bgcolor: '#7dd673', '&:hover': { bgcolor: '#3ab22c' } }}>Registrar Compra</Button></Link>
      <Link href={`${ROUTES.PAGOS}?tarjetaId=${tarjetaId}`}><Button variant="contained" disabled={saldoTotal === 0} sx={{ bgcolor: '#67b5e5', '&:hover': { bgcolor: '#238cce' } }}>Registrar Pago</Button></Link>
      <Link href={`${ROUTES.TARJETAS_DE_CREDITO}/${tarjetaId}${ROUTES.TRANSACCIONES}`}><Button variant="contained" sx={{ bgcolor: '#878787', '&:hover': { bgcolor: '#494949' } }}>Transacciones</Button></Link>
    </div>
  );
};

export default DataGridButtons;
