import baseClient from "./baseClient";

import ENDPOINTS from '../constants/endpoints';

const { getComprasByTarjetaDeCreditoId } = ENDPOINTS;

export const getComprasByTarjetaId = async (tarjetaDeCreditoId) => {
  const response = await baseClient.get(getComprasByTarjetaDeCreditoId(tarjetaDeCreditoId));
  return response;
};
