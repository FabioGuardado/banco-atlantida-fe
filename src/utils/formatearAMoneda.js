const { format: formatearAMoneda } = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default formatearAMoneda;
