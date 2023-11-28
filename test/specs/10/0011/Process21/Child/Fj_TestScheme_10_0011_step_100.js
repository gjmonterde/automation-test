const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_10_0011_step_100: An error message is displayed and cannot be accepted", async () => {
    const stepNum = "100"; // ★ 新環境適用' New Env Implementation

    // Cick Notification button
    await $(".//*[@class='unsNotificationsCounter']").click();
    await browser.pause(5000);

    // Click Notification record
    await $(".//a[@class='notification-link']")
      .$(".//span[contains(text(), '" + test_data.testData.agr_name + "')]")
      .waitForClickable({ timeout: 10000 });
    await $(".//a[@class='notification-link']")
      .$(".//span[contains(text(), '" + test_data.testData.agr_name + "')]")
      .click();
    await browser.pause(4000);

    // Click approve button
    await $(
      ".//a[@title='" + test_data.testData.approve_confirm + "']"
    ).click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Enter comment
    await $("textarea").setValue(test_data.testData.approve_comment_value);

    // Click Approve button
    await $("button=" + test_data.testData.approve_confirm).click();
    await browser.pause(10000);

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );

    var ssno = 2;
    for (var i = 0; i < test_data.testData.ba_nameArr.length; i++) {
      // Go to BA Page
      await util.Open_SF_Record_URL(
        1,
        user_info.object.ba_obj,
        test_data.testData.ba_idArr[i]
      );

      ssno = ssno + 1;
      // Screenshot - 100-3
      const highlights12_2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar12_2 = await $(".//header[@id='oneHeader']");
      const tabheader12_2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec10 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar12_2, tabheader12_2, highlights12_2],
          fullPageScrollTimeout: 1000,
        }
      );

      // Edit
      const ba_status_edit = await $(
        ".//button[@title='" +
          test_data.testData.ba_status_edit_title +
          " の編集']"
      );
      await ba_status_edit.waitForClickable({ timeout: 10000 });
      await ba_status_edit.click();
      await browser.pause(3000);

      // 確認ステータス
      await $("label=" + test_data.testData.ba_status_edit_title).$(
        function () {
          this.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        }
      );
      // ★ 新環境適用' New Env Implementation
      const status_id = await $(
        ".//label[contains(.,'" +
          test_data.testData.ba_status_edit_title +
          "')]"
      ).getAttribute("for");
      const status_btn = await $(".//button[@id='" + status_id + "']");
      await status_btn.waitForClickable({ timeout: 10000 });
      await status_btn.click();
      await $(
        ".//lightning-base-combobox-item[contains(.,'" +
          test_data.testData.ba_status_value +
          "')]"
      ).click(); // ★ 新環境適用' New Env Implementation
      await browser.pause(1000);

      // Save
      await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
      await browser.pause(10000);

      ssno = ssno + 1;
      // Screenshot
      const highlights12_3 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar12_3 = await $(".//header[@id='oneHeader']");
      const tabheader12_3 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec10 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar12_3, tabheader12_3, highlights12_3],
          fullPageScrollTimeout: 1000,
        }
      );
    }

    // Cick Notification button
    await $(".//*[@class='unsNotificationsCounter']").click();
    await browser.pause(5000);

    // Click Notification record
    await $(".//a[@class='notification-link']")
      .$(".//span[contains(text(), '" + test_data.testData.agr_name + "')]")
      .waitForClickable({ timeout: 10000 });
    await $(".//a[@class='notification-link']")
      .$(".//span[contains(text(), '" + test_data.testData.agr_name + "')]")
      .click();
    await browser.pause(4000);

    // Click approve button
    await $(
      ".//a[@title='" + test_data.testData.approve_confirm + "']"
    ).click();
    await browser.pause(5000);

    // Enter comment
    await $("textarea").setValue(test_data.testData.approve_comment_value);

    // Click Approve button
    await $("button=" + test_data.testData.approve_confirm).click();
    await browser.pause(50000);

    // Screenshot
    ssno = ssno + 1;
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-" +
        ssno
    );
  });
}
