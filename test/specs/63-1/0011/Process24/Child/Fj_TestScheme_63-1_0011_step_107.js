const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0011-24");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0011_step_107: Validation Error「お借入内容調整実施済みのため、融資条件項目は変更できません。」", async () => {
    const stepNum = "107"; // ★ 新環境適用' New Env Implementation

    // Go to APP record detail screen
    await parent.Open_APP_Record();

    // Edit 融資額(調整上限) -- pencil
    const loan_amount_upper_limit = await $(
      ".//button[@title='" + test_data.testData.loan_upper_limit_edit + "']"
    );
    await loan_amount_upper_limit.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await loan_amount_upper_limit.waitForClickable({
      timeout: 10000,
    });
    await loan_amount_upper_limit.click();
    await browser.pause(5000);

    // Set 融資額(調整上限) error
    // ★ 新環境適用' New Env Implementation
    const amountLabel = await $(
      "//label[contains(.,'" + test_data.testData.loan_upper_limit_lbl + "')]"
    );
    await amountLabel.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    const amountLimit = await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.loan_upper_limit_lbl +
        "']/@for]"
    );
    await amountLimit.setValue(test_data.testData.loan_upper_limit_value_error);
    await browser.pause(3000);

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Deselect the hover/selected fields
    await browser.keys(["Escape"]);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Fill out again
    await amountLabel.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await amountLimit.setValue(test_data.testData.loan_upper_limit_value_error);
    await browser.pause(3000);

    // Click 保存 button
    browser.keys(["Escape"]);
    await browser.execute("document.body.style.zoom='90%'");
    await browser.pause(3000);
    browser.keys(["Tab"]);
    await browser.pause(1000);
    browser.keys(["Enter"]);
    await browser.pause(5000);
    browser.keys(["Tab"]);
    await browser.pause(1000);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
    browser.keys(["Enter"]);
    await browser.pause(1000);

    // Click cancel button
    const cancel_edit_btn = await $(
      ".//button[@name='" + test_data.testData.sf_canceledit_btn + "']"
    );
    await browser.execute((cancel_edit_btn) => {
      cancel_edit_btn.click();
    }, cancel_edit_btn);
    await browser.pause(5000);
  });
}
