const BaseComponent = require("./base.component");

class NewPasteFormComponent extends BaseComponent {
  constructor() {
    super("#w0"); // Assuming the form element has id 'w0'
  }

  get newPasteTextarea() {
    return $("#postform-text");
  }

  get pasteSintaxDropdown() {
    return $("#select2-postform-format-container");
  }

  get pasteExpirationDropdown() {
    return $("#select2-postform-expiration-container");
  }

  get pasteNameTitleInput() {
    return $("#postform-name");
  }

  get createNewPasteButton() {
    return $("button.btn.-big[type=submit]");
  }

  /**
   *
   * @param {"10 Minutes"| "1 Hour" | "1 Day" | "1 Week" | "2 Weeks" | "1 Month" | "6 Months" | "1 Year"} exp
   * @returns selector for option to click
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

    return $(`//li[contains(@id, 'select2-postform-expiration-result') and text()='${exp}']`);

  }

  /**
   *
   * @param {language} sintax
   * @returns selector for option to click
   */
  pasteSintaxOptionSelect(sintax) {
    return $(`//li[contains(@id, 'select2-postform-format-result') and text()='${sintax}']`);
  }
}

module.exports = new NewPasteFormComponent();