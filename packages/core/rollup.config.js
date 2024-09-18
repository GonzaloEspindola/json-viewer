import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs', // CommonJS para Node.js
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm', // ESModule para navegadores modernos
    }
  ],
  plugins: [
    typescript(),
    postcss({
      extract: true,  // Esto extraerá el CSS a un archivo separado
      minimize: true, // Minificar CSS
    }),
  ],
};
