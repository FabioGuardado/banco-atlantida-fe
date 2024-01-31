import { useState } from 'react';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { TextField, Button } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import styles from './FormularioTransacciones.module.css';
import { crearCompra } from '@/api/compras';
import { crearPago } from '@/api/pagos';

const INITIAL_STATE = {
  fecha: moment(),
  descripcion: '',
  monto: '',
};

const FormularioTransacciones = ({ tarjetaDeCreditoId, isCompra }) => {
  const [formValues, setFormValues] = useState(INITIAL_STATE);
  const router = useRouter();

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      formValues.descripcion.replace(' ', '').length > 0 &&
      formValues.monto.replace(' ', '').length > 0
    ) {
      const fechaParsed = formValues.fecha.toISOString();
      const objectToSend = {
        fecha: fechaParsed,
        descripcion: formValues.descripcion,
        [isCompra ? 'monto' : 'abono']: Number(formValues.monto),
        tarjetaDeCreditoId,
      };
      if (isCompra) {
        crearCompra(objectToSend);
      } else {
        crearPago(objectToSend);
      }
      setFormValues(INITIAL_STATE);
      router.back();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formularioContainer}>
        <div className={styles.formularioItem}>
          <h4>Fecha de Compra</h4>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              type="text"
              name="fecha"
              value={formValues.fecha}
              sx={{ width: '225px' }}
              onChange={handleChange}
            />
          </LocalizationProvider>
        </div>

        <div className={styles.formularioItem}>
          <h4>Descripción</h4>
          <TextField
            type="text"
            name="descripcion"
            size="small"
            value={formValues.descripcion}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formularioItem}>
          <h4>Monto</h4>
          <TextField
            type="text"
            name="monto"
            size="small"
            value={formValues.monto}
            onChange={handleChange}
          />
        </div>

        <div className={styles.buttonsContainer}>
          <Button type="submit" variant="contained">
            Guardar
          </Button>
          <Button variant="outlined" onClick={() => router.back()}>
            Cancelar
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormularioTransacciones;
