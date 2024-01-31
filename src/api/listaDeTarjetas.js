import baseClient from "./baseClient";

import ENDPOINTS from '../constants/endpoints';

const { getTarjetasDeCredito, getTarjetaDeCreditoDetails } = ENDPOINTS;

export const getListaDeTarjetas = async (pageNumber = 1, pageSize = 10, searchString = undefined) => {
  const response = await baseClient.get(getTarjetasDeCredito(pageNumber, pageSize, searchString));
  return response;
};

export const getTarjetaDetails = async (tarjetaId = 0) => {
  const response = await baseClient.get(getTarjetaDeCreditoDetails(tarjetaId));
  return response;
}