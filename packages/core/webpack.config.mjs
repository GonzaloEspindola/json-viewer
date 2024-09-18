import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'JsonViewer',
            type: 'umd',
        },
    },
    resolve: {
        extensions: ['.ts', '.js', '.css'], // Agrega .css
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/, // Regla para manejar archivos CSS
                use: ['style-loader', 'css-loader'], // Primero style-loader, luego css-loader
            },
        ],
    },
    mode: 'development',
};
