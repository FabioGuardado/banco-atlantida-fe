import useGetTarjetaDeCreditoDetails from '../../../hooks/useGetTarjetaDeCreditoDetails';

import formatearAMoneda from '../../../utils/formatearAMoneda';

import styles from './InformacionGeneral.module.css';

const InformacionGeneral = ({ tarjetaDeCreditoId }) => {
  const { data } = useGetTarjetaDeCreditoDetails(tarjetaDeCreditoId);
  return (
    <div className={styles.informacionGeneralContainer}>
      <div>
        <div className={styles.informacionGeneralItem}>
          <span className={styles.informacionGeneralTitulo}>
            Nombre del cliente:{' '}
          </span>
          <span>{data?.titularDeLaTarjeta ?? ''}</span>
        </div>

        <div className={styles.informacionGeneralItem}>
          <span className={styles.informacionGeneralTitulo}>
            Número de tarjeta de crédito:{' '}
          </span>
          <span>{data?.numeroDeTarjeta ?? ''}</span>
        </div>

        <div className={styles.informacionGeneralItem}>
          <span className={styles.informacionGeneralTitulo}>Limite: </span>
          <span>{formatearAMoneda(data?.limite ?? '')}</span>
        </div>
      </div>

      <div>
        <div className={styles.informacionGeneralItem}>
          <span className={styles.informacionGeneralTitulo}>
            Saldo Actual:{' '}
          </span>
          <span>{formatearAMoneda(data?.saldoTotal ?? '')}</span>
        </div>

        <div className={styles.informacionGeneralItem}>
          <span className={styles.informacionGeneralTitulo}>
            Saldo Disponible:{' '}
          </span>
          <span>{formatearAMoneda(data?.saldoDisponible ?? '')}</span>
        </div>

        <div className={styles.informacionGeneralItem}>
          <span className={styles.informacionGeneralTitulo}>
            Interés Bonificable:{' '}
          </span>
          <span>{formatearAMoneda(data?.interesBonificable ?? '')}</span>
        </div>

        <div className={styles.informacionGeneralItem}>
          <span className={styles.informacionGeneralTitulo}>
            Monto total de contado con intereses:{' '}
          </span>
          <span>{formatearAMoneda(data?.montoTotalDeContadoConIntereses ?? '')}</span>
        </div>

        <div className={styles.informacionGeneralItem}>
          <span className={styles.informacionGeneralTitulo}>
            Cuota Mínima a Pagar:{' '}
          </span>
          <span>{formatearAMoneda(data?.cuotaMinimaAPagar ?? '')}</span>
        </div>
      </div>
    </div>
  );
};

export default InformacionGeneral;
