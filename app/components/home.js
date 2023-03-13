import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import { action } from '@ember/object';

export default class HomeComponent extends Component {
  currentTabs = null;
  @tracked currentTab = undefined;
  tabs = null;

  constructor() {
    super(...arguments);
    this.getCurrentTabsss();
  }

  getCurrentTab = task(async () => {
    this.tabs = this.currentTabs;
    let [tab] = this.currentTabs;
    this.currentTab = tab;
    console.log(this.currentTab);
  });

  @action async getCurrentTabsss() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let tabs = await chrome.tabs.query(queryOptions);
    let [tab] = tabs;
    this.currentTabs = tabs;
    this.currentTab = tab;
    console.log(this.currentTabs);
    console.log(this.currentTab);
  }

  @action makeBorder() {
    document.body.style.border = '5px solid red';
  }

  @action async makeApiCAll() {
    const url = await fetch('https://google.com');
    console.log(url);
  }
}
