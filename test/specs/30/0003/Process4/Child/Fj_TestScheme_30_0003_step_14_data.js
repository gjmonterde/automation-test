const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0003-4");

export default function suite() {
  it("Fj_TestScheme_30_0003_step_14_data: Update 2nd DDP record (Data Linkage)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "14";

    // Login to org as admin
    await parent.Login_as_Admin();

    // ★ 新環境適用' New Env Implementation
    // Go to 2nd DDP related record
    await parent.Go_to_DDP();

    // Screenshot DDP
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Edit Same person Inquiry 同一人照会
    await $(
      "//button[@title='" +
        test_data.testData.ddp_same_person_inquiry_edit_btn +
        "']"
    ).click();
    await browser.pause(2000);
    const lbl = await $(
      "//label[contains(.,'" +
        test_data.testData.same_person_inquiry_status_label +
        "')]"
    );
    await lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await lbl.click();
    const val = await $(
      "span=" + test_data.testData.same_person_inquiry_status_value
    );
    await val.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await val.waitForClickable({ timeout: 30000 });
    await val.click();
    await browser.pause(5000);

    // Screenshot
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
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
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        fullPageScrollTimeout: 1000,
      }
    );

    // Save
    await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    ).click();
    await browser.pause(50000);

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot DDP
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );

    // Logout as admin
    await browser.url(user_info.userInformation.var_sf_logouturl);
    await browser.pause(5000);
  });
}
