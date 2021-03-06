import { browser, element, by } from 'protractor';

export class DirectivesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('directives-root h1')).getText();
  }
}
