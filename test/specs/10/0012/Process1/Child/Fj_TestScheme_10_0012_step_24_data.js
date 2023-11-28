var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const parent = require("../Parent/Fj_TestScheme_10_0012-1");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_10_0012_step_24_data: Manual Batch Autorun (data linkage)", async () => {
    const stepNum = "24"; // ★ 新環境適用' New Env Implementation

    // ★ 新環境適用' New Env Implementation
    // Login as admin
    await parent.Login_as_Admin();

    // Change ご融資希望日
    // Go to Applications tab
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Go to 告知画面 tab
    await util.Application_Record_Scrolling(3);

    // Scroll into ご融資希望日
    await $(
      "//span[contains(text(), '" +
        test_data.testData.app_requested_start_date_lbl +
        "')]"
    ).$(function () {
      this.scrollIntoView();
    });
    await browser.pause(5000);

    // Scroll into ご融資希望日, then edit and save
    await $(
      "//span[contains(text(), '" +
        test_data.testData.app_requested_start_date_lbl +
        "')]"
    ).scrollIntoView();
    await browser.pause(5000);
    await $(
      "//button[contains(.,'" + test_data.testData.start_date_edit + "')]"
    ).waitForClickable({
      timeout: 5000,
    });
    await $(
      "//button[contains(.,'" + test_data.testData.start_date_edit + "')]"
    ).click();
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
      "//label[contains(.,'" +
        test_data.testData.app_requested_start_date_lbl +
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
        test_data.testData.app_requested_start_date_lbl +
        "']/@for]"
    ).setValue(year + "/" + month + "/" + day);
    await browser.pause(5000);

    // Save Edit
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(10000);

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

    console.log("#############apexBody: " + apexBody); // ★ログ追加
    await conn.tooling.executeAnonymous(apexBody, function (err, res) {
      test_data.testData.res_results.push(res);
      console.log("#############compiled?: " + res.compiled);
      console.log("#############executed?: " + res.success);
      console.log("#############results?: " + JSON.stringify(res));
    });

    // Loop through the res array to determine if the apex job is schedulable or not
    for (var res = 0; res < test_data.testData.res_results.length; res++) {
      var record = test_data.testData.res_results[res];
      // Exit the script when compilation of apex job is false
      if (record.compiled != true && record.success != true) {
        await browser.deleteSession();
      }
    }

    // Add pause to give scheduled job time to complete
    await browser.pause(60000);

    // Get Cron Trigger Id
    await conn
      .sobject("CronTrigger")
      .select("Id, CronJobDetail.Name")
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (test_data.testData.cron_name == record.CronJobDetail.Name) {
            test_data.testData.cron_id = record.Id;
          }
        }
      });

    // Query
    await util.Developer_Console(
      test_data.testData.query_0012_24_1 +
        "'" +
        test_data.testData.cron_name +
        "'"
    );

    // Screenshot - developer console
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data
    );

    // Click Query Editor
    await util.Developer_Console(
      test_data.testData.query_0012_24_2 +
        "'" +
        test_data.testData.cron_id +
        "'"
    );

    // Screenshot - developer console
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data
    );

    // Logout
    await parent.Logout();
  });
}
