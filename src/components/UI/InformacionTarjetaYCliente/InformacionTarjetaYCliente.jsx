import useGetTarjetaDeCreditoDetails from '@/hooks/useGetTarjetaDeCreditoDetails';

import styles from '@/components/UI/InformacionTarjetaYCliente/InformacionTarjetaYCliente.module.css';

const InformacionTarjetaYCliente = ({ tarjetaId }) => {
  const { data } = useGetTarjetaDeCreditoDetails(tarjetaId);
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.item}>
          <span className={styles.titulo}>Nombre del Cliente: </span>
          <span>{data?.titularDeLaTarjeta ?? ''}</span>
        </div>

        <div className={styles.item}>
          <span className={styles.titulo}>Número de tarjeta de crédito: </span>
          <span>{data?.numeroDeTarjeta ?? ''}</span>
        </div>
      </div>
    </div>
  );
};

export default InformacionTarjetaYCliente;
