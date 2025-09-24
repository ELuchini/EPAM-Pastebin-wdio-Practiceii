const BasePage = require("./base.page");
const PasteInfoComponent = require("../components/paste-info.component");

class PastePage extends BasePage {
  constructor() {
    super(
      "http://127.0.0.1:5500/src/test/pastebin-res/how%20to%20gain%20dominance%20among%20developers%20-%20Pastebin.com.html"
    ); //mocked result site.
    this.pasteInfo = new PasteInfoComponent();
  }
}

module.exports = new PastePage();