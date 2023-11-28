const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");

export default function suite() {
  it("Fj_TestScheme_63-1_0011_step_72: Application information shall be displayed", async () => {
    const stepNum = "72"; // ★ 新環境適用' New Env Implementation

    // Go to My Page APP record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(10000);

    // Click on contract details button
    const contract_details_btn = await $(
      ".//button[contains(text(), '" +
        test_data.testData.mypage_contract_details_btn +
        "')]"
    );
    await contract_details_btn.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await contract_details_btn.click();
    await browser.pause(10000);

    // Screenshot
    await $(".//iframe[@data-id='childVf']").$(function () {
      var height = this.contentWindow.document.body.offsetHeight;
      var body = document.getElementsByClassName("body")[0];
      var footer = document.getElementsByClassName("footer")[0];
      this.style.height = height + 50 + "px";
      body.style.height = height + footer.offsetHeight + 50 + "px";
      footer.style = "margin-bottom: 50px";
    });
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Switch frame
    const form_frame = await browser.$(".//iframe[@data-id='childVf']");
    await browser.pause(3000);
    await browser.switchToFrame(form_frame);

    // Expand the accordion
    const accordion_contract = await $(
      ".//span[contains(text(), '" +
        test_data.testData.accordion_contract +
        "')]"
    );

    await accordion_contract.click();
    await browser.pause(3000);

    // Back to parent frame
    await browser.switchToParentFrame();

    // Screenshot
    await $(".//iframe[@data-id='childVf']").$(function () {
      var height = this.contentWindow.document.body.offsetHeight;
      var body = document.getElementsByClassName("body")[0];
      var footer = document.getElementsByClassName("footer")[0];
      this.style.height = height + 50 + "px";
      body.style.height = height + footer.offsetHeight + 50 + "px";
      footer.style = "margin-bottom: 50px";
    });
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(2000);
  });
}
