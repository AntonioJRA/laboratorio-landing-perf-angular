const CompressionPlugin = require('compression-webpack-plugin');

module.exports = (config) => {
  config.plugins.push(
    new CompressionPlugin({
      filename: '[path][base].gz', // Genera archivos .gz
      algorithm: 'gzip',
      test: /\.(html|css|js|json|ico|svg)$/, // Archivos a comprimir
      threshold: 8192, // Solo comprime archivos mayores a 8KB
      minRatio: 0.8, // Relación de compresión
    })
  );

  return config;
};
