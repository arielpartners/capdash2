import { browser, element, by } from 'protractor';

export class Capdash2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cd-root h1')).getText();
  }
}
