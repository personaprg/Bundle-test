// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    //entry 입력 output 내보내기
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //dist는 변경하지 않는 것을 권장
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            //원하는데로 파일들을 추가 할수 있다.
            //ex) app.js같은거
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
