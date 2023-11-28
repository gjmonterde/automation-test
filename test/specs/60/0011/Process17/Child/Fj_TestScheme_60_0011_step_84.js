const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");

export default function suite() {
  it(
    "Fj_TestScheme_60_0011_step_84: The following items must display the value that was determined at the time of the previous condition check." +
      " (It is not necessary to check if there is 該当項目なし no applicable item.)",
    async () => {
      const stepNum = "84"; // ★ 新環境適用' New Env Implementation

      // Go to My Page Application record screen
      await browser.url(
        user_info.userInformation.var_sf_siteurl +
          "/s/application-detail?id=" +
          test_data.testData.app_id
      );
      await browser.pause(10000);

      // Screenshot
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
      await browser.pause(3000);

      // Click the 「お借入内容調整」 "Loan details adjustment" button.
      await $(
        ".//button[contains(text(), '" +
          test_data.testData.mypage_borrowing_details_btn +
          "')]"
      ).click();
      await browser.pause(10000);

      // Change to the お借入内容調整 borrowing details adjustment screen
      // Switch frame
      const form_frame = await browser.$(".//iframe[@data-id='childVf']");
      await browser.pause(3000);
      await browser.switchToFrame(form_frame);
      const interest_rate_arw = await $(".//details[@class='slds-accordion']");
      await interest_rate_arw.click();
      await browser.pause(2000);

      // Switch frame
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
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-2"
      );
      await browser.pause(2000);
    }
  );
}
