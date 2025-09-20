const BasePage = require("./base.page");

class HomePage extends BasePage {
  constructor() {
    super("https://pastebin.com/");
  }

  get newPasteTextarea() {
    return $("#postform-text");
  }

  get pasteSintaxSelect() {
    return $("#postform-format");
  }

  get pasteSintaxDropdown() {
    return $("#select2-postform-format-container");
  }

  get pasteSintaxOption() {
    return $("[id^='select2-postform-format'][id$='-8']");
  }

  get pasteExpirationSelect() {
    return $("#postform-expiration");
  }

  get pasteExpirationDropdown() {
    return $("#select2-postform-expiration-container");
  }

  get pasteExpirationOption() {
    return $("[id^='select2'][id$='-10M']");
    // return $("#select2-postform-expiration-result-p8zk-10M"); Por lo visto tiene parte del id variable.
    //return $("#select2-postform-expiration-result-glss-1D");
  }

  get pasteNameTitleInput() {
    return $("#postform-name");
  }

  get createNewPasteButton() {
    return $("button.btn.-big[type=submit]");
  }

  async createNewPaste(code, sintax, expiration, title) {
    await this.pasteSintaxDropdown.waitForClickable({ timeout: 3000 });
    await this.pasteSintaxDropdown.click();
    await this.sintaxSelect(sintax).click();

    await this.newPasteTextarea.waitForDisplayed({ timeout: 5000 });
    await this.newPasteTextarea.setValue(code);

    await this.pasteExpirationDropdown.waitForClickable({ timeout: 3000 });
    await this.pasteExpirationDropdown.click();
    await this.expirationSelect(expiration).waitForClickable({ timeout: 3000 });
    await this.expirationSelect(expiration).click();
    //selectByAttribute('value', 'AR')

    await this.pasteNameTitleInput.waitForDisplayed({ timeout: 3000 });
    await this.pasteNameTitleInput.setValue(title);

    await this.createNewPasteButton.click();
  }

  /**
   *
   * @param {"10 Minutes"| "1 Hour" | "1 Day" | "1 Week" | "2 Weeks" | "1 Month" | "6 Months" | "1 Year"} exp
   * @returns
   */

  expirationSelect(exp) {
    const selectors = {
      "10 minutes": "10M",
      "1 hour": "1H",
      "1 day": "1D",
      "1 week": "1W",
      "2 weeks": "2W",
      "1 month": "1M",
      "6 months": "6M",
      "1 year": "1Y",
    };

    return $(`[id^='select2'][id$='-${selectors[exp.toLowerCase()]}']`);
  }

  /**
   *
   * @param {*} sintax
   * @returns
   */

  sintaxSelect(sintax) {
    const selectors = {
      "bash": "-8",
      "c#": "-9",
      "c++": "-13",
      "css": "-16",
      "html": "-25",
      "java": "-27",
      "javascript": "-28",
    };
    // console.log(`Salida desde la función sintaxSelect:
    //    '${selectors[sintax.toLowerCase()]}'`);
    // console.log(
    //   $(
    //     `[id^='select2-postform-format'][id$='${
    //       selectors[sintax.toLowerCase()]
    //     }']`
    //   )
    // );
    return $(
      `[id^='select2-postform-format'][id$='${
        selectors[sintax.toLowerCase()]
      }']`
    );
  }
}

module.exports = new HomePage();
