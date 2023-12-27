function calculateTotalSalesWithTax(products, taxRate) {
  const totalSales = products
    .map((obj) => obj['price'] * obj['quantity'])
    .reduce((total, price) => total + price, 0);

  const totalSalesWithTax = (totalSales * taxRate) / 100;
  return Number(totalSalesWithTax.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
