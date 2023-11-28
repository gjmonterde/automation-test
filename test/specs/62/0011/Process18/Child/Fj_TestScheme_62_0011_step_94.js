const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0011-18");

export default async function suite() {
  it(
    "Fj_TestScheme_62_0011_step_94: The following item values can be set and saved: 契約同意フラグ　Flag＝TRUE," +
      "契約同意日時＝※ Current date and time",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "94";

      // Go to AGR record
      await parent.Go_to_AGR();

      // Edit
      // ★ 新環境適用' New Env Implementation
      const edit = await $(
        "//span[contains(., '" +
          test_data.testData.agr_contract_acceptance_flag_lbl +
          "')]"
      );
      await edit.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      await edit.doubleClick();
      await browser.pause(1000);

      // 契約同意フラグ=TRUE
      // ★ 新環境適用' New Env Implementation
      const flg = await $(
        ".//label[contains(., '" +
          test_data.testData.agr_contract_acceptance_flag_lbl +
          "')]"
      );
      await flg.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });

      await browser.execute((flg) => {
        flg.click();
      }, flg);

      // Get Date and Time (Japan)
      var datestring = new Date(Date.now()).toLocaleString("ja-JP", {
        timeZone: "Asia/Tokyo",
        hourCycle: "h23",
      });
      var date = new Date(datestring);
      var timestring = date.toLocaleTimeString("ja-JP", {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
        hourCycle: "h23",
      });
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();

      // 日付
      const agr_date = await browser.execute(
        (fieldset, lbl) => {
          const id = document
            .evaluate(
              "//fieldset[contains(., '" +
                fieldset +
                "')]/div/div[1]/label[contains(., '" +
                lbl +
                "')]",
              document,
              null,
              XPathResult.FIRST_ORDERED_NODE_TYPE,
              null
            )
            .singleNodeValue.getAttribute("for");
          return id;
        },
        test_data.testData.agr_contract_agreement_datetime_lbl,
        test_data.testData.agr_date_lbl
      );
      await $(".//input[@id='" + agr_date + "']").setValue(
        year + "/" + month + "/" + day
      );

      // 時間
      const agr_time = await browser.execute(
        (fieldset, lbl) => {
          const id = document
            .evaluate(
              "//fieldset[contains(., '" +
                fieldset +
                "')]/div/div[2]/div/label[contains(., '" +
                lbl +
                "')]",
              document,
              null,
              XPathResult.FIRST_ORDERED_NODE_TYPE,
              null
            )
            .singleNodeValue.getAttribute("for");
          return id;
        },
        test_data.testData.agr_contract_agreement_datetime_lbl,
        test_data.testData.agr_time_lbl
      );
      await $(".//input[@id='" + agr_time + "']").setValue(timestring);
      await browser.keys(["Escape"]);
      await browser.pause(2000);

      // Screenshot - App Record left column edit
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec62 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1"
      );

      // Save
      const save = await $(
        "//button[@title='" + test_data.testData.save_btn + "']"
      );
      await browser.execute((btn) => {
        btn.click();
      }, save);
      await browser.pause(30000);
    }
  );
}
