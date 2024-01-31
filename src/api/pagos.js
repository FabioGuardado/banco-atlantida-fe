import baseClient from "./baseClient";

import ENDPOINTS from '../constants/endpoints';

const { pagos } = ENDPOINTS;

export const crearPago = async (objectToSend) => {
  const formattedBody = JSON.stringify(objectToSend);
  const response = await baseClient.post(pagos, formattedBody);
  return response;
}
