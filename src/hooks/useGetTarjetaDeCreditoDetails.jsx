import { useEffect, useState, useCallback } from 'react';

import { getTarjetaDetails } from '../api/listaDeTarjetas';

const useGetTarjetaDeCreditoDetails = (tarjetaId) => {
  const [data, setData] = useState(undefined);

  const getData = useCallback(async () => {
    try {
      const { data } = await getTarjetaDetails(tarjetaId);
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

export default useGetTarjetaDeCreditoDetails;
