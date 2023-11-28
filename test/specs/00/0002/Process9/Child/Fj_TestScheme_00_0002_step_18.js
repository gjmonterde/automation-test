const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");

export default function suite() {
  it("Fj_TestScheme_00_0002_step_18: The File Upload component is hidden", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "18";

    // Go to APP list view
    await $(
      ".//span[contains(.,'" + test_data.testData.home_mypage + "')]"
    ).click();
    await browser.pause(3000);
    await $(
      "(//a[contains(text(),'" +
        test_data.testData.see_app +
        "')])[2]/parent::*"
    ).click();
    await browser.pause(3000);

    // Go to My Page APP record screen
    await $(
      "//a[@title='/s/application-detail?id=" +
        test_data.testData.app_id +
        "']/parent::*"
    ).click();
    await browser.pause(10000);

    // Go to My Page RDC record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/required-document-detail?id=" +
        test_data.testData.rdc1_id_of_ver1
    );
    await browser.pause(5000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);
  });
}
