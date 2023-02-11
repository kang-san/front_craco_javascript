import CracoAlias from 'craco-alias';

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
