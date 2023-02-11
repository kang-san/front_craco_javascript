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
    babel: {
        plugins: [
            [
                'babel-plugin-root-import',
                {
                    rootPathSuffix: 'src',
                    rootPathPrefix: '@',
                    allowImportExportEverywhere: true,
                }
            ]
        ]
    },
    webpack: {
        resolve : {
            alias: {
                '@components': path.resolve(__dirname, 'src/components/'),
                '@contexts': path.resolve(__dirname, 'src/contexts/'),
                '@hooks': path.resolve(__dirname, 'src/hooks/'),
                '@pages': path.resolve(__dirname, 'src/pages/'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/i,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                cacheDirectory: true,
                                cacheCompression: false,
                                envName: isProd ? 'production' : 'development'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                    API_URL: JSON.stringify(process.env.API_URL),
                },
            }),
        ],
    }
};
