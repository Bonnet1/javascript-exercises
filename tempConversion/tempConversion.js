const ftoc = function(fah) {
  let fullFah = (fah-32)*(5/9);
  return Math.round(fullFah);
}

const ctof = function(cel) {
  let fullCel = (cel*(9/5)) + 32;
  return Math.round(fullCel);
}

module.exports = {
  ftoc,
  ctof
}
