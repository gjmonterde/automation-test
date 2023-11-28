const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0011-8");

export default async function suite() {
  it("Fj_TestScheme_63-1_0011_step_34: The「確定する」'Confirm' button cannot be pressed", async () => {
    const stepNum = "34"; // ★ 新環境適用' New Env Implementation

    // Go to MyPage app record
    await parent.MyPage_App_Record();

    // Click on loan adjustment details button
    const loan_details_adjustment_btn = await $(
      ".//button[contains(text(), '" +
        test_data.testData.loan_details_adjustment_btn +
        "')]"
    );
    await loan_details_adjustment_btn.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await loan_details_adjustment_btn.click();
    await browser.pause(3000);

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
    await browser.pause(2000);
  });
}
