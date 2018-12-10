import { Component } from '@angular/core';

import { HomePage } from '../home/home';

import { TestPage } from '../test/test';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeTab = HomePage;

  testTab = TestPage;

  constructor() {

  }
}
