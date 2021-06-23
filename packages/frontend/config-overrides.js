const { alias } = require('react-app-rewire-alias');

const aliasMap = {
    _AppConfig: 'src/app-config',
    _Images: 'src/assets/images',
    _Pages: 'src/pages',
    _Shared: 'src/shared',
    _Styles: 'src/assets/styles',
    _Utils: 'src/utils',
};

module.exports = alias(aliasMap);

/* For more info- https://www.npmjs.com/package/react-app-rewire-alias */
