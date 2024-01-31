import { useEffect, useState, useCallback } from 'react';

import { getComprasByTarjetaId } from '../api/compras';

const useCompras = (tarjetaId) => {
  const [data, setData] = useState(undefined);

  const getData = useCallback(async () => {
    try {
      const { data } = await getComprasByTarjetaId(tarjetaId);
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

export default useCompras;
