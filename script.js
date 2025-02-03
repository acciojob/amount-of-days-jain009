function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function countLeapYears(endYear) {
  let count = 0;
  for (let year = 0; year <= endYear; year++) {
    if (isLeapYear(year)) {
      count++;
    }
  }
  return count;
}
