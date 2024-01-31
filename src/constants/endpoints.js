const ENDPOINTS = {
  getTarjetasDeCredito: (pageNumber, pageSize, searchString = undefined) =>
    `/TarjetasDeCredito?PageNumber=${[pageNumber]}&PageSize=${pageSize}${searchString ? `&SearchString=${searchString}` : ''}`,
};

export default ENDPOINTS;
