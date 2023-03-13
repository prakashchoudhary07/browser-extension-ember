import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  constructor() {
    super(...arguments);
    let metaScope = document.querySelector("meta[scope='ember-app-from']");
    let scope = metaScope
      ? metaScope.getAttribute('content')
      : 'content-script';
    this.appScope = scope;
    console.log('SOMETING NEW');
    console.log(scope);
  }

  appScope;

}
