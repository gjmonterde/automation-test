const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0010-13");

export default async function suite() {
  it("Fj_TestScheme_62_0010_step_35: Update existing BA record 確認ステータス Confirmation Status = 「確認済」 Confirmed", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "35";

    let ssno = 0;
    for (var i = 0; i < test_data.testData.ba_name_arr.length; i++) {
      // Go to BA Page
      await parent.Go_to_BA(test_data.testData.ba_id_arr[i]);

      ssno = ssno + 1;
      // Screenshot
      const highlights1 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar1 = await $(".//header[@id='oneHeader']");
      const tabheader1 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec62 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
          fullPageScrollTimeout: 1000,
        }
      );

      // Edit
      const ba_status_edit = await $(
        ".//button[@title='" + test_data.testData.ba_status_edit_btn + "']"
      );
      await ba_status_edit.$(function () {
        this.scrollIntoView({
          block: "center",
        });
      });
      await ba_status_edit.waitForClickable({ timeout: 10000 });
      await ba_status_edit.click();
      await browser.pause(3000);

      await $(
        ".//records-form-footer[contains(., '" +
          test_data.testData.save_btn +
          "')]"
      ).$(function () {
        var height = document.getElementsByClassName(
          "record-body-container"
        ).offsetheight;
        this.style.marginTop = height - this.offsetHeight + "px";
        this.style.position = "static";
      });

      // 確認ステータス
      const status = await $(
        "label=" + test_data.testData.ba_confirmation_status_label
      );
      await status.$(function () {
        this.scrollIntoView({
          block: "center",
        });
      });
      const status_id = await status.getAttribute("for");
      const status_btn = await $(".//button[@id='" + status_id + "']");
      await status_btn.waitForClickable({ timeout: 10000 });
      await status_btn.click();
      const val = await $(
        "span=" + test_data.testData.ba_confirmation_status_value
      );
      await val.waitForClickable({ timeout: 10000 });
      await val.click();
      await browser.pause(2000);
      await browser.keys(["Escape"]);
      await browser.pause(3000);

      ssno = ssno + 1;
      // Screenshot
      const highlights2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec62 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
          fullPageScrollTimeout: 1000,
        }
      );

      // Save
      await $(
        ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
      ).click();
      await browser.pause(20000);

      ssno = ssno + 1;
      // Screenshot
      const highlights3 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar3 = await $(".//header[@id='oneHeader']");
      const tabheader3 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec62 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
          fullPageScrollTimeout: 1000,
        }
      );
    }
  });
}
