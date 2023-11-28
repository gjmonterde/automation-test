const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0011_step_124: Switch to the 契約同意画面 contract agreement screen", async () => {
    const stepNum = "124"; // ★ 新環境適用' New Env Implementation

    // Go to home page
    await $(
      ".//span[contains(.,'" + test_data.testData.home_mypage + "')]"
    ).click();
    await browser.pause(10000);

    // Go to APP list view
    await $(
      "(//a[contains(text(),'" +
        test_data.testData.see_app +
        "')])[2]/parent::*"
    ).click();
    await browser.pause(10000);

    // Search
    const search_product = await $(
      "//input[@name='" + test_data.testData.search_textbox + "']"
    );
    await search_product.scrollIntoView();
    await search_product.doubleClick();
    await browser.pause(3000);
    await search_product.setValue(test_data.testData.pro_name);
    browser.keys(["Enter"]);
    await browser.pause(3000);

    // Sort APP
    const appname_col = await $(
      ".//a[contains(., '" + test_data.testData.mypage_amount_sort + "')]"
    );
    var sort_text = await appname_col.nextElement().getText();
    while (sort_text != test_data.testData.sort_app_asc) {
      await appname_col.click();
      await browser.pause(3000);
      sort_text = await appname_col.nextElement().getText();
    }
    await expect(sort_text).toBe(test_data.testData.sort_app_asc);

    const appname_col2 = await $(
      ".//a[contains(., '" + test_data.testData.mypage_app_status_sort + "')]"
    );
    var sort_text = await appname_col2.nextElement().getText();
    while (sort_text != test_data.testData.sort_app_asc) {
      await appname_col2.click();
      await browser.pause(3000);
      sort_text = await appname_col2.nextElement().getText();
    }
    await expect(sort_text).toBe(test_data.testData.sort_app_asc);

    await $("a=" + test_data.testData.app_name).scrollIntoView();

    // Deselect the hover/selected fields
    await util.Deselect_fields(5);

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
    await browser.pause(2000);

    // Go to My Page APP record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(5000);

    // Click on contract details button
    const contract_details_btn = await $(
      ".//button[contains(text(), '" +
        test_data.testData.mypage_contract_details_btn +
        "')]"
    );
    await contract_details_btn.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await contract_details_btn.click();
    await browser.pause(10000);

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
        "-3"
    );
    await browser.pause(2000);
  });
}
