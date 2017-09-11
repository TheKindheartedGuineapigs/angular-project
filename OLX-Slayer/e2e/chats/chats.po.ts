import { browser, by, element } from 'protractor';

export class ChatsPage {
  LOGIN_EMAIL = 'e2etester@asd.com';
  LOGIN_PASSWORD = 'parola';
  E2E_RECEIVER = 'e2eReceiver';

  constructor() {
    browser.ignoreSynchronization = true;
  }

  navigateLogin() {
    return browser.get('/login');
  }

  visitChats() {
    return element(by.css('#chat-nav-btn')).click();
  }

  getChatTitle() {
    return element(by.css('span > b'));
  }

  visitChatPage() {
    return element(by.css('div > div > div > div.card-action > a')).click();
  }

  sendMessage(val) {
    const messageInput = element(by.css('app-message-send > div > form > div > div > input'));
    messageInput.clear();
    messageInput.sendKeys('test from e2e ' + val);

    const messageForm = element(by.css('app-message-send > div > form'));
    return messageForm.submit();
  }

  logIn() {
    const email = element(by.css('#inputEmail'));
    const password = element(by.css('#inputPassword'));
    const submitBtn = element(by.css('body > app-root > app-login > div > div > div > form > button'));

    email.clear();
    email.sendKeys(this.LOGIN_EMAIL);

    password.clear();
    password.sendKeys(this.LOGIN_PASSWORD);

    return submitBtn.click();
  }
}
