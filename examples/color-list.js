'use strict';

var colors = require('../index.js');

Object.keys(colors).forEach((k) => {
  console.log(colors.COLOR_NORMAL + k + ' ====> ' + colors[k] + k + colors.COLOR_NORMAL_COLOREND);
});
