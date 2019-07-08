// Dependências
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

// Plugins
const cssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'bundle.css',
});
const jsMinifyPlugin = new TerserJSPlugin({});
const cssMinifyPlugin = new OptimizeCSSAssetsPlugin({});
const cleanerPlugin = new CleanWebpackPlugin();
// Gera favicons otimizados para diferentes plataformas
const faviconPlugin = new FaviconsWebpackPlugin('./favicon.png');

/**
 * Páginas do app
 */
const indexHtml = new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
    chunks: ['app']
});

const sobreHtml = new HtmlWebpackPlugin({
    template: 'src/sobre.html',
    filename: 'sobre.html',
    chunks: ['sobre']
});

/**
 * Configurações
 */
module.exports = {
    /**
     * Scripts de entrada.
     * No caso, um para cada página do app.
     * Este estilo de configuração não é
     * necessariamente obrigatória.
     */
    entry: {
        app: './src/js/app.js',
        sobre: './src/js/sobre.js'
    },
    /**
     * Scripts de saída gerados.
     * É gerado um chunk file para
     * cada script de entrada.
     */
    output: {
        chunkFilename: '[name].js'
    },
    /**
     * Minificação de scripts JS e
     * folhas de estilo CSS.
     */
    optimization: {
        minimizer: [jsMinifyPlugin, cssMinifyPlugin],
    },
    /**
     * Aplicação dos plugins importados.
     * Neste ponto adicionamos também as páginas
     * do app.
     */
    plugins: [
        cssExtractPlugin,
        cleanerPlugin,
        faviconPlugin,
        indexHtml,
        sobreHtml
    ],
    /**
     * - Carga dos scripts JS;
     * - Compilação e carga das folhas de estilo SASS;
     * - Carga, interpretação e minificação das páginas HTML
     *   e páginas parciais;
     * - Carga de arquivos de imagens.
     */
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/node_modules/, /\.test.js$/],
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.scss$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader
                },
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.html$/,
            use: {
                loader: 'html-loader',
                options: {
                    minimize: true,
                    interpolate: true
                }
            }
        }, {
            test: /\.(png|jpg|jpeg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img/',
                    publicPath: 'img/'
                }
            }
        }]
    }
};