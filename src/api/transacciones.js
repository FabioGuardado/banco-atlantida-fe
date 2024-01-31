import baseClient from "./baseClient";

import ENDPOINTS from '../constants/endpoints';

const { getTransaccionesByTarjetaDeCreditoId } = ENDPOINTS;

export const getTransaccionesByTarjetaId = async (tarjetaDeCreditoId) => {
  const response = await baseClient.get(getTransaccionesByTarjetaDeCreditoId(tarjetaDeCreditoId));
  return response;
};
