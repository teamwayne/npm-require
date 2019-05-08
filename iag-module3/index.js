module.exports = iagModuleThree = (item) => {
  window.load = window.load || "Load.js is not in use on this page...";
  console.log(' window.load: ', window.load);

  return navigator.userAgent || navigator || document;
};
