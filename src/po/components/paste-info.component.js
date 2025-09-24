const BaseComponent = require("./base.component");

class PasteInfoComponent extends BaseComponent {
  constructor() {
    super("div.post-view.js-post-view");
  }

  get title() {
    return this.rootEl.$("div.details > div.info-bar > div.info-top > h1");
  }

  get expire() {
    return this.rootEl.$("div.info-bottom>div.expire");
  }

  get code() {
    return this.rootEl.$("textarea");
  }

  get sintax() {
    return this.rootEl.$(
      "div.highlighted-code > div.source.bash > ol"
    );
  }
}

module.exports = PasteInfoComponent;
