const { resolve, join } = require('path');
const rootPath = resolve(__dirname, '..', '..');

module.exports = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': join(rootPath, 'src', 'components'),
        '@styles': join(rootPath, 'src', 'styles'),
        '@assets': join(rootPath, 'content', 'assets'),
      },
      extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    },
  });
};
