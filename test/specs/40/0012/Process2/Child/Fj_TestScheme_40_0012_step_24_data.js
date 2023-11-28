var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_40_0012_step_24_data: Manual Batch Autorun (data linkage)", async () => {
    // Change ご融資希望日
    // Go to Applications tab
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Open 告知画面 tab
    await util.Application_Record_Scrolling(3);

    // Edit ご融資希望日
    const edit_btn = await $(
      "//button[contains(.,'" +
        test_data.testData.app_requested_start_date_edit_btn +
        "')]"
    );
    await edit_btn.waitForClickable({
      timeout: 5000,
    });
    await edit_btn.click();
    await browser.pause(5000);

    // Set ご融資希望日 to current date (Japan)
    var date1string = new Date(Date.now()).toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
    });
    var date = new Date(date1string);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    // ★ 新環境適用' New Env Implementation
    await $(
      ".//label[contains(.,'" +
        test_data.testData.app_requested_start_date_field +
        "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.app_requested_start_date_field +
        "']/@for]"
    ).setValue(year + "/" + month + "/" + day);
    await browser.pause(3000);

    // Save Edit
    await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    ).click();
    await browser.pause(20000);

    // JSForce Connection
    var conn = new jsforce.Connection({
      loginUrl: user_info.userInformation.var_sf_loginurl,
    });
    await conn.login(
      user_info.userInformation.var_sf_loginuser_admin,
      user_info.userInformation.var_sf_loginpwd_admin,
      function (err, res) {
        if (err) {
          return console.log(err);
        }
      }
    );
    await browser.pause(5000);

    // Parse cron name
    const app_number_name_regex = /[1-9].*/;
    const app_number_name = test_data.testData.app_name.match(
      app_number_name_regex
    );
    test_data.testData.cron_name =
      test_data.testData.cron_name + parseInt(app_number_name);

    // Get Time (Japan)
    var date2string = new Date(Date.now()).toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
    });
    var date2 = new Date(date2string);
    date2.setSeconds(date2.getSeconds() + 5);
    var seconds = date2.getSeconds();
    var minute = date2.getMinutes();
    var hour = date2.getHours();

    // Set executeAnonymous script to run
    var apexBody =
      "Fj_AutoExecutionBatch targetClass = new Fj_AutoExecutionBatch(); system.schedule('" +
      test_data.testData.cron_name +
      "','" +
      seconds +
      " " +
      minute +
      " " +
      hour +
      " " +
      day +
      " " +
      month +
      " ? " +
      year +
      "',targetClass);";

    // Execute Anonymous using tooling API
    await conn.tooling.executeAnonymous(apexBody, function (err, res) {
      console.log("#############compiled?: " + res.compiled);
      console.log("#############executed?: " + res.success);
      console.log("#############results?: " + JSON.stringify(res));
      test_data.testData.batch_compiled = res.compiled;
      test_data.testData.batch_executed = res.success;
    });

    // Check if script was executed and compiled
    expect(test_data.testData.batch_compiled).toEqual(
      test_data.testData.isTrue
    );
    expect(test_data.testData.batch_executed).toEqual(
      test_data.testData.isTrue
    );

    if (
      test_data.testData.batch_compiled != test_data.testData.isTrue ||
      test_data.testData.batch_executed != test_data.testData.isTrue
    ) {
      await browser.deleteSession();
    }

    // Add pause to give scheduled job time to complete
    await browser.pause(60000);
  });
}
