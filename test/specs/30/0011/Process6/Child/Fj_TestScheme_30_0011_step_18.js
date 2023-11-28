const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");

export default function suite() {
  it("Fj_TestScheme_30_0011_step_18: Change to the お借入れ内容調整画面 borrowing details adjustment screen", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "18";

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Click the 「お借入内容調整」 "Loan details adjustment" button.
    await $(
      "button=" + test_data.testData.mypage_borrowing_details_btn
    ).click();
    await browser.pause(15000);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
