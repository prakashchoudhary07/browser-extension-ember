import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import { action } from '@ember/object';

export default class HomeComponent extends Component {
  @tracked currentTabs = null;
  @tracked currentTab = undefined;
  tabs = null;

  constructor() {
    super(...arguments);
  }

  getCurrentTab = task(async () => {
    this.tabs = this.currentTabs;
    let [tab] = this.currentTabs;
    this.currentTab = tab;
    console.log(this.currentTab);
  });

  @action async getCurrentTabsss() {
    let queryOptions = {};
    let tabs = await chrome.tabs.query(queryOptions);
    let [tab] = tabs;
    this.currentTabs = tabs;
    this.currentTab = tab;
    console.log('ALL tabns', this.currentTabs);
    console.log('THIS TAB', this.currentTab);
  }

  @action makeBorder() {
    document.body.style.border = '5px solid blue';
  }

  @action async makeApiCAll() {
    console.log('ASD');
    const url = await fetch('https://google.com');
    console.log(url);
  }
}
