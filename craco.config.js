const CracoAlias = require('@craco/craco');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
        jsConfigPath: 'jsconfig.paths.json',
      },
    },
  ],
  devServer: {
    port: 8000,
  },
};
