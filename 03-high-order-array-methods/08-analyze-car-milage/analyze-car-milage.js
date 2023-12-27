function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((total, obj) => total + obj['mileage'], 0);

  const averageMileage = parseFloat((totalMileage / cars.length).toFixed(2));

  const lowestMileageCar = cars.reduce(
    (lowest, car) =>
      lowest['mileage'] > car['mileage'] ? (lowest = car) : lowest,
    cars[0]
  );

  // different way
  let highestMileageCar = cars[0];
  cars.forEach((car) => {
    if (car['mileage'] > highestMileageCar['mileage']) {
      highestMileageCar = car;
    }
  });

  return {
    averageMileage: averageMileage,
    highestMileageCar: highestMileageCar,
    lowestMileageCar: lowestMileageCar,
    totalMileage: totalMileage,
  };
}

module.exports = analyzeCarMileage;
