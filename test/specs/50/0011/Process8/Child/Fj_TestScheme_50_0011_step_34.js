const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");

export default function suite() {
  it("Fj_TestScheme_50_0011_step_34: 「確定する」 Confirm button cannot be pressed", async () => {
    const stepNum = "34"; // ★ 新環境適用' New Env Implementation

    await browser.refresh();
    await browser.pause(5000);

    // Click the 「お借入れ内容調整」 "Loan details adjustment" button.
    const borrowing_btn = await $(
      "button=" + test_data.testData.mypage_borrowing_details_btn
    );
    await borrowing_btn.scrollIntoView();
    await borrowing_btn.click();
    await browser.pause(10000);

    // Screenshot - お借入れ内容調整（ご確定済み） Screen (top)
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
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
