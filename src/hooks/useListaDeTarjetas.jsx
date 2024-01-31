import { useEffect, useState, useCallback } from 'react';

import { getListaDeTarjetas } from '../api/listaDeTarjetas';

const useListaDeTarjetas = (pageNumber, pageSize, searchString) => {
  const [data, setData] = useState(undefined);

  const getData = useCallback(async () => {
    try {
      const { data } = await getListaDeTarjetas(pageNumber, pageSize, searchString);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }, [pageNumber, pageSize, searchString]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data };
}

export default useListaDeTarjetas;
