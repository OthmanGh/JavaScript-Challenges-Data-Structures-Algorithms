const isValidIPv4 = (str) => {
  const octets = str.split('.');

  if (octets.length !== 4) return false;

  return octets.every(
    (octet) => octet >= 0 && octet <= 255 && octet.charAt(0) != 0
  );
};

module.exports = isValidIPv4;
