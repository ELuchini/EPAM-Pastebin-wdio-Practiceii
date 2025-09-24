const { expect } = require("@wdio/globals");
const HomePage = require("@pages/home.page");
const PastePage = require("../po/pages/paste.page");
const pasteText =
  'git config --global user.name  "New Sheriff in Town"\n' +
  'git reset $(git commit-tree HEAD^{tree} -m "Legacy code")\n' +
  "git push origin master --force";

describe("Practice Form Test", () => {
  before(async () => {
    await HomePage.open();
    await HomePage.createNewPaste(
      pasteText,
      "Bash",
      "10 Minutes",
      "how to gain dominance among developers"
    );
    await PastePage.open();
  });

  it("Expiration option should be 10 Minutes", async () => {
    await PastePage.pasteInfo.expire.waitForExist({ timeout: 3000 });
    await PastePage.pasteInfo.expire.waitForDisplayed({ timeout: 3000 });
    await expect(PastePage.pasteInfo.expire).toHaveText("10 MIN");
  });

  it("Sintax option should be bash", async () => {
    await PastePage.pasteInfo.sintax.waitForExist({ timeout: 3000 });
    await PastePage.pasteInfo.sintax.waitForDisplayed({ timeout: 3000 });
    await expect(PastePage.pasteInfo.sintax).toHaveClass("bash");
  });

  it("Title should be how to gain dominance among developers", async () => {
    await expect(PastePage.pasteInfo.title).toHaveText(
      "how to gain dominance among developers"
    );
  });

  it("Code should be equal to pasteText", async () => {
    await expect(PastePage.pasteInfo.code).toHaveText(pasteText);
  });
});

// Please find the Task 2 description below and provide the link to your solution in the comment field.

// When performing a task, you must use the capabilities of WebdriverIO, a unit test framework (Mocha) and the Page Object concept.

// Automate the following script:

// 1. Open https://pastebin.com/ or a similar service in any browser.
// 2. Create 'New Paste' with the following attributes:
//    * Code:
//             git config --global user.name  "New Sheriff in Town"
//             git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
//             git push origin master --force
//    * Syntax Highlighting: "Bash"
//    * Paste Expiration: "10 Minutes"
//    * Paste Name / Title: "how to gain dominance among developers"
// 3. Save 'paste' and check the following:
//    * Browser page title matches 'Paste Name / Title'
//    * Syntax is suspended for bash
//    * Check that the code matches the one from paragraph 2
