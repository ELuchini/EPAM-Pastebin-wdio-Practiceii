const BasePage = require("./base.page");
const NewPasteFormComponent = require("../components/new-paste-form.component");

class HomePage extends BasePage {
  constructor() {
    super("https://pastebin.com/");
    this.newPasteForm = NewPasteFormComponent;
  }

  async hideAds() {
    const ad = await $(".display_ad_place");
    if (await ad.isDisplayed()) {
      await browser.execute("arguments[0].style.display = 'none';", ad);
    }
  }

  async createNewPaste(code, sintax, expiration, title) {
    await this.hideAds();

    await this.newPasteForm.pasteSintaxDropdown.waitForClickable({ timeout: 3000 });
    await this.newPasteForm.pasteSintaxDropdown.click();
    await this.newPasteForm.pasteSintaxOptionSelect(sintax).click();

    await this.newPasteForm.newPasteTextarea.waitForDisplayed({ timeout: 5000 });
    await this.newPasteForm.newPasteTextarea.setValue(code);

    await this.hideAds();

    await this.newPasteForm.pasteExpirationDropdown.waitForClickable({ timeout: 3000 });
    await this.newPasteForm.pasteExpirationDropdown.click();
    await this.newPasteForm.expirationSelect(expiration).waitForClickable({ timeout: 3000 });
    await this.newPasteForm.expirationSelect(expiration).click();

    await this.newPasteForm.pasteNameTitleInput.waitForDisplayed({ timeout: 3000 });
    await this.newPasteForm.pasteNameTitleInput.setValue(title);

    await this.newPasteForm.createNewPasteButton.click();
  }
}

module.exports = new HomePage();
