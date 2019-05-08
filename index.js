const config = window.onload.config || {'name':'load','profile':['nrma','prod'],'rev':'2019-04-15T05:11:51.751Z','debug':'nrma/dev'};
const iagModuleOne = require('iag-module1');
const iagModuleTwo = require('iag-module2');
const iagModuleThree = require('iag-module3');
const iagModuleFour = require('iag-module4');

console.log(iagModuleOne(config));
console.log(iagModuleTwo());
iagModuleThree(config);
console.log(iagModuleFour());
