import baseClient from "./baseClient";

import ENDPOINTS from '../constants/endpoints';

const { compras, getComprasByTarjetaDeCreditoId } = ENDPOINTS;

export const getComprasByTarjetaId = async (tarjetaDeCreditoId) => {
  const response = await baseClient.get(getComprasByTarjetaDeCreditoId(tarjetaDeCreditoId));
  return response;
};

export const crearCompra = async (objectToSend) => {
  const formattedBody = JSON.stringify(objectToSend);
  const response = await baseClient.post(compras, formattedBody);
  return response;
}
