var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0012-2");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0012_step_24: The 処理 processing status of the 実行結果データ execution result data must be「自動実行連携失敗」", async () => {
    const stepNum = "24"; // ★ 新環境適用' New Env Implementation

    // Go to App Record
    await parent.Open_APP_Record();

    // Open 告知画面 tab
    await parent.Switch_App_Tab(3);

    // Scroll into ご融資希望日, then edit and save
    await $(
      "//span[contains(text(), '" +
        test_data.testData.preferred_loan_date_label +
        "')]"
    ).$(function () {
      this.scrollIntoView();
    });
    await browser.pause(5000);
    await $(
      "//button[contains(.,'" +
        test_data.testData.edit_desired_loan_date +
        "')]"
    ).waitForClickable({
      timeout: 10000,
    });
    await $(
      "//button[contains(.,'" +
        test_data.testData.edit_desired_loan_date +
        "')]"
    ).click();
    await browser.pause(5000);

    await $("//records-form-footer[@class='slds-docked-form-footer']").$(
      function () {
        this.style.position = "static";
      }
    );

    var date = new Date(Date.now());
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    // ★ 新環境適用' New Env Implementation
    await $(
      ".//label[contains(.,'" +
        test_data.testData.preferred_loan_date_label +
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
        test_data.testData.preferred_loan_date_label +
        "']/@for]"
    ).setValue(year + "/" + month + "/" + day);
    await browser.pause(3000);

    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );

    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await $(".//*[@class='main-container slds-grid']").$(function () {
      var left = document.getElementsByClassName("col left-col slds-col"),
        middle = document.getElementsByClassName("col main-col slds-col"),
        right = document.getElementsByClassName("col right-col slds-col");
      var height = Math.max(
        left.offsetHeight,
        middle.offsetHeight,
        right.offsetHeight
      );
      this.style = "height:" + height + "px!important";
    });
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1",
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
      }
    );

    // Save record
    const save_btn = await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(30000);
    await browser.refresh();
    await browser.pause(5000);

    // Open 告知画面 tab
    await parent.Switch_App_Tab(3);

    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await $(".//*[@class='main-container slds-grid']").$(function () {
      var left = document.getElementsByClassName("col left-col slds-col"),
        middle = document.getElementsByClassName("col main-col slds-col"),
        right = document.getElementsByClassName("col right-col slds-col");
      var height = Math.max(
        left.offsetHeight,
        middle.offsetHeight,
        right.offsetHeight
      );
      this.style = "height:" + height + "px!important";
    });
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // parse cron name
    const app_number_name_regex = /[1-9].*/;
    const app_number_name = test_data.testData.app_name.match(
      app_number_name_regex
    );
    test_data.testData.cron_name =
      test_data.testData.cron_name + parseInt(app_number_name);

    // Anonymous Apex (Backend)
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

    // Note: before running schedulable apex class make sure to change the
    // cron_name, sched_minute, and sched_hour variables in the test info file and
    // make sure the time is advanced by 1 hour and 6 minutes (Japan time)
    var apexBody =
      "Fj_AutoExecutionBatch targetClass = new Fj_AutoExecutionBatch(); system.schedule('" +
      test_data.testData.cron_name +
      "','0 " +
      test_data.testData.sched_minute +
      " " +
      test_data.testData.sched_hour +
      " " +
      day +
      " " +
      month +
      " ? " +
      year +
      "',targetClass);";

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
        await browser.closeWindow();
      }
    }
    await browser.pause(450000);

    // Login to org as Admin for querying
    await parent.Login_as_Admin();

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

    // Go to Salesforce Developer Console
    // Make sure to login as admin
    await util.Developer_Console(
      test_data.testData.query_0012_24_cron_query1 +
        "'" +
        test_data.testData.cron_name +
        "'"
    );

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(5000);

    // Input query in textarea
    await util.Developer_Console(
      test_data.testData.query_0012_24_cron_query2 +
        "'" +
        test_data.testData.cron_id +
        "'"
    );

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-4"
    );
    await browser.pause(5000);

    // Login as tantou1
    await parent.Login_As_Tantou1();

    // Go to Exec Result Record
    await parent.Open_Exec_Record();

    const exec_highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const exec_headerBar = await $(".//header[@id='oneHeader']");
    const exec_tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [exec_headerBar, exec_tabheader, exec_highlights],
      }
    );
    await browser.pause(2000);
  });
}
