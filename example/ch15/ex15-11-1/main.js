const moment = require('moment-timezone');

console.log(moment().fromNow());
console.log(moment().subtract(1, 'year').format());
console.log("======");
console.log(moment().subtract(10, 'seconds').fromNow());
console.log(moment().subtract(44, 'seconds').fromNow());
console.log(moment().subtract(45, 'seconds').fromNow());
console.log(moment().subtract(5, 'minutes').fromNow());
console.log(moment().subtract(44, 'minutes').fromNow());
console.log(moment().subtract(45,'minutes').fromNow());
console.log(moment().subtract(5, 'hours').fromNow());
console.log(moment().subtract(21, 'hours').fromNow());
console.log(moment().subtract(22, 'hours').fromNow());
console.log(moment().subtract(320, 'days').fromNow());
console.log(moment().subtract(321, 'days').fromNow());
