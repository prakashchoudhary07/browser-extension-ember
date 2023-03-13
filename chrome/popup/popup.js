(function () {
  console.log('👋 Booting up the ember app...');
  require('test-browser-extension/app')['default'].create({
    rootElement: '#browser-extension',
  });
})();
