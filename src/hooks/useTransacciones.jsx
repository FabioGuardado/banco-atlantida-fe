import { useEffect, useState, useCallback } from 'react';

import { getTransaccionesByTarjetaId } from '../api/transacciones';

const useTransacciones = (tarjetaId) => {
  const [data, setData] = useState(undefined);

  const getData = useCallback(async () => {
    try {
      const { data } = await getTransaccionesByTarjetaId(tarjetaId);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }, [tarjetaId]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data };
}

export default useTransacciones;
