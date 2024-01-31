import baseClient from "./baseClient";

import ENDPOINTS from '../constants/endpoints';

const { getTarjetasDeCredito } = ENDPOINTS;

export const getListaDeTarjetas = async (pageNumber = 1, pageSize = 10, searchString = undefined) => {
  const response = await baseClient.get(getTarjetasDeCredito(pageNumber, pageSize, searchString));
  return response;
};