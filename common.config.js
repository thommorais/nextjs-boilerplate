const { resolve } = require('path');

const SOURCE = resolve(__dirname, './src');

module.exports = {
  alias: {
    components: `${SOURCE}/components`,
    containers: `${SOURCE}/containers`,
    utils: `${SOURCE}/utils`,
    ui: `${SOURCE}/utils/ui`,
  },
  compose(...functions) {
    return functions.reduce(
      (previous, current) => (...args) => previous(current(...args)),
      arg => arg,
    );
  },
};
