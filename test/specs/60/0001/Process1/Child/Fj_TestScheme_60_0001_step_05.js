const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");

export default async function suite() {
  it("Fj_TestScheme_60_0001_step_05: The application form will be displayed and the product name will be displayed", async () => {
    const stepNum = "5"; // ★ 新環境適用' New Env Implementation

    // Expand Procedure My Page Terms of Use
    await $(
      ".//a[contains(.,'" + test_data.testData.acc1 + "')]"
    ).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    await $(".//a[contains(.,'" + test_data.testData.acc1 + "')]").click();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
