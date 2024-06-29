const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const version = require('./package.json').version;
const findUnusedLocales = require('./webpack/loaders/localesLoader/findUnusedLocales');

const isDevelopment = process.env.NODE_ENV !== 'production';
const isAnalyze = process.argv.includes('--analyze');

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: {
        app: path.resolve('src', 'js', 'index.js')
    },
    output: {
        filename: 'js/[name].[contenthash].js',
        publicPath: '/crm/',
        path: path.resolve('crm'),
        assetModuleFilename: 'assets/[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules(\/|\\)(?!(smarty-crm-toolkit|sanitize-html))/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                exclude: /(\.module\.css$)|(node_modules(\/|\\)(?!(smarty-crm-toolkit|normalize.css|animate.css|leaflet|cropperjs|rc-slider)))/i,
                use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.module\.css$/i,
                exclude: /node_modules(\/|\\)(?!(smarty-crm-toolkit|smarty-crm-icons))/,
                use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]--[contenthash]'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|ico|mp3|wav|woff|ttf|eot)$/,
                exclude: /node_modules(\/|\\)(?!(leaflet))/,
                type: 'asset/resource'
            },
            {
                test: /\.svg$/,
                include: /node_modules(\/|\\)smarty-crm-icons/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            svgoConfig: {
                                plugins: [
                                    {
                                        removeUselessStrokeAndFill: false,
                                        removeViewBox: false
                                    }
                                ]
                            }
                        }
                    },
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'svg/[name].[ext]'
                        }
                    }
                ],
                type: 'javascript/auto'
            },
            ...(isDevelopment
                ? []
                : [
                      {
                          test: /\.json$/,
                          include: /node_modules(\/|\\)smarty-crm-locales/,
                          use: [
                            {
                                loader: path.resolve('webpack', 'loaders', 'localesLoader', 'localesLoader.js'),
                                options: {
                                    unused: findUnusedLocales(path.resolve('src'))
                                }
                            }
                        ]
                    }
                ])
      ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: path.resolve('src', 'public'), to: path.resolve('crm') }]
        }),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(version || '0.1.0'),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.html')
        }),
        ...(isAnalyze ? [new BundleAnalyzerPlugin()] : []),
        new webpack.ProgressPlugin()
    ],
    resolve: {
        alias: {
            Config: path.resolve('src', 'js', 'configs', process.env.DEPLOY_ENV || 'fe')
        },
        extensions: ['.js', '.tsx', '.ts']
    },
    optimization: {
        minimizer: ['...', new CssMinimizerPlugin()],
        splitChunks: {
            chunks: 'all'
        },
        runtimeChunk: 'single'
    },
    devServer: {
        disableHostCheck: true,
        historyApiFallback: {
            index: '/crm/index.html'
        },
        compress: true,
        host: '0.0.0.0',
        hot: true,
        useLocalIp: true,
        port: 8090
    },
    devtool: isDevelopment ? 'eval' : 'nosources-source-map',
    stats: 'errors-only'
};
