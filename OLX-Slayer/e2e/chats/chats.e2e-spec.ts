import { browser, by, element } from 'protractor';
import { ChatsPage } from './chats.po';

describe('Chats page', () => {
  let page: ChatsPage;

  beforeEach(() => {
    page = new ChatsPage();
  });

  afterEach(() => {
    browser.ignoreSynchronization = false;
  });

  it('/chats should contain chat with the receiver', () => {
    page.navigateLogin();
    page.logIn()
      .then(() => {
        browser.wait(() => {
          return browser.isElementPresent(by.id('chat-nav-btn'));
        }, 2000);
      })
      .then(() => {
        return page.visitChats();
      })
      .then(() => {
        browser.wait(() => {
          return browser.isElementPresent(by.css('div > div.card-content.white-text > span > b'));
        }, 5000);
      })
      .then(() => {
        const title = page.getChatTitle().getText();
        expect(title).toEqual(page.E2E_RECEIVER);
      });
  });

  it('/chats/receiver should contain some messages', () => {
    page.navigateLogin();
    page.logIn()
      .then(() => {
        browser.wait(() => {
          return browser.isElementPresent(by.id('chat-nav-btn'));
        }, 2000);
      })
      .then(() => {
        return page.visitChats();
      })
      .then(() => {
        browser.wait(() => {
          return browser.isElementPresent(by.css('div > div > div > div.card-action > a'));
        }, 5000);
      })
      .then(() => {
        return page.visitChatPage();
      })
      .then(() => {
        browser.wait(() => {
          return browser.isElementPresent(by.css('div.row > div.col > div.messages > span'));
        }, 5000);
      })
      .then(() => {
        return element.all(by.css('div.row > div.col > div.messages > span')).count();
      })
      .then((count) => {
        expect(count).toBeGreaterThan(0);
      });
  });

  it('successfully send a message and refresh messages list', () => {
    let msgCount = 0;
    const val = new Date();

    page.navigateLogin();
    page.logIn()
      .then(() => {
        browser.wait(() => {
          return browser.isElementPresent(by.id('chat-nav-btn'));
        }, 2000);
      })
      .then(() => {
        return page.visitChats();
      })
      .then(() => {
        browser.wait(() => {
          return browser.isElementPresent(by.css('div > div > div > div.card-action > a'));
        }, 5000);
      })
      .then(() => {
        return page.visitChatPage();
      })
      .then(() => {
        browser.wait(() => {
          return browser.isElementPresent(by.css('div.row > div.col > div.messages > span'));
        }, 5000);
      })
      .then(() => {
        return element.all(by.css('div.row > div.col > div.messages > span')).count();
      })
      .then((count) => {
        msgCount = count;

        return page.sendMessage(val);
      })
      .then(() => {
        return element.all(by.css('div.row > div.col > div.messages > span')).count();
      })
      .then((count) => {
        expect(count - 1).toEqual(msgCount);
      });
  });
});
