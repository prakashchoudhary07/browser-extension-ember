/* global chrome */
class ContentScript {
  constructor() {
    //...
  }

  //...

  buttonClicked() {
    console.log('CLICK');
    this.startEmberApp();
  }

  //...

  startEmberApp() {
    require('test-browser-extension/app')['default'].create({
      rootElement: '#browser-extension',
    });
  }
}

let contentScript = new ContentScript();
