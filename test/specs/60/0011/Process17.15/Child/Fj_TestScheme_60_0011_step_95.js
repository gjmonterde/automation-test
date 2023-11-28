const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0011-17.15");

export default function suite() {
  it("Fj_TestScheme_60_0011_step_95: Application information shall be displayed", async () => {
    const stepNum = "95"; // ★ 新環境適用' New Env Implementation

    // Go to Application Page
    await parent.Go_to_Application();

    // Go to contract
    await parent.Go_to_Contract();

    // Change to the お借入内容調整画面 borrowing details adjustment screen
    // Switch frame
    const form_frame = await browser.$(".//iframe[@data-id='childVf']");
    await browser.pause(3000);
    await browser.switchToFrame(form_frame);
    const interest_rate_arw = await $(".//details[@class='slds-accordion']");
    await interest_rate_arw.click();
    await browser.pause(2000);
    await browser.switchToParentFrame();

    // Screenshot - My Page お借入れ内容調整 screen
    await $(".//iframe[@data-id='childVf']").$(function () {
      var height = this.contentWindow.document.body.offsetHeight;
      var body = document.getElementsByClassName("body")[0];
      var footer = document.getElementsByClassName("footer")[0];
      this.style.height = height + 50 + "px";
      body.style.height = height + footer.offsetHeight + 50 + "px";
      footer.style = "margin-bottom: 50px";
    });
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
