import formatearAMoneda from "@/utils/formatearAMoneda";

import styles from './ResumenInferiorDeCompras.module.css';

const ResumenInferiorDeCompras = ({ data }) => {
  return (
    <div className={styles.resumenDeComprasContainer}>
      <div className={styles.resumenDeComprasItem}>
        <span>{formatearAMoneda(data?.comprasTotalesMesPasado ?? '')}</span>
        <span className={styles.itemName}>Mes Pasado</span>
      </div>

      <div className={styles.resumenDeComprasItem}>
        <span>{formatearAMoneda(data?.comprasTotalesMesActual ?? '')}</span>
        <span className={styles.itemName}>Mes Actual</span>
      </div>
    </div>
  );
};

export default ResumenInferiorDeCompras;
