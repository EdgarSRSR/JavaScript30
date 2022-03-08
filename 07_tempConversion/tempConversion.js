const ftoc = function(degrees) {

  let conversion = (degrees - 32)*0.5556;
  return Math.round(conversion * 10)/10;


};

const ctof = function(degrees) {

  let conversion = (degrees*1.8) + 32;
  return Math.round(conversion * 10)/10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
