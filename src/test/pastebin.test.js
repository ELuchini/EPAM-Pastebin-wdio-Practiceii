const { expect } = require("@wdio/globals");
const HomePage = require("@pages/home.page");
const pasteText =
  '\tgit config --global user.name  "New Sheriff in Town"\n' +
  '\tgit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\n' +
  "\tgit push origin master --force";

describe("Practice Form Test", () => {
  before(async () => {
    await HomePage.open();
    await HomePage.createNewPaste(
      pasteText,
      "Bash",
      "10 Minutes",
      "how to gain dominance among developers"
    );
  });

  it("Expiration option should be 10 Minutes", async () => {
    // await HomePage.pasteExpirationSelect.waitForDisplayed({ timeout: 3000 });
    await $("div.info-bottom>div.expire").waitForExist({ timeout: 20000 });
    await $("div.info-bottom>div.expire").waitForDisplayed({ timeout: 15000 });
    await expect($$("div.info-bottom>div.expire")).toHaveValue("10 MIN");
  });

  // it("Title should be helloweb", async () => {
  //   await expect(HomePage.pasteNameTitleInput).toHaveValue("helloweb");
  // });

  // it("Code should be Hello from WebDriver", async () => {
  //   await expect(HomePage.newPasteTextarea).toHaveValue("Hello from WebDriver");
  // });
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
