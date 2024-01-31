const ENDPOINTS = {
  tarjetasDeCredito: '/TarjetasDeCredito',
  getTarjetasDeCredito: (pageNumber, pageSize, searchString = undefined) =>
    `${ENDPOINTS.tarjetasDeCredito}?pageNumber=${pageNumber}&pageSize=${pageSize}${searchString ? `&searchString=${searchString}` : ''}`,
  getTarjetaDeCreditoDetails: id => `${ENDPOINTS.tarjetasDeCredito}/${id}`,
  compras: '/Compras',
  getComprasByTarjetaDeCreditoId: tarjetaDeCreditoId =>
    `${ENDPOINTS.compras}?tarjetaDeCreditoId=${tarjetaDeCreditoId}`,
  transacciones: '/Transacciones',
  getTransaccionesByTarjetaDeCreditoId: tarjetaDeCreditoId =>
    `${ENDPOINTS.transacciones}?tarjetaDeCreditoId=${tarjetaDeCreditoId}`,
  pagos: '/Pagos',
};

export default ENDPOINTS;
