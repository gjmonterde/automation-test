var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0012-1");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_62_0012_step_24_data: Manual Batch Autorun (data linkage)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "24";

    // Login as admin
    await parent.Login_as_Admin();

    // Go to App Record
    await parent.Open_APP_Record();

    // Open 案件詳細 tab
    await parent.Switch_App_Tab(2);

    // Screenshot
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
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Go to App Record
    await parent.Open_APP_Record();

    // Open 案件詳細 tab
    await parent.Switch_App_Tab(3);

    // Scroll into ご融資希望日, then edit and save
    await $(
      "//span[contains(text(), '" +
        test_data.testData.app_requested_start_date_lbl +
        "')]"
    ).$(function () {
      this.scrollIntoView();
    });
    await browser.pause(5000);

    // Edit ご融資希望日
    await $(
      "//button[contains(.,'" +
        test_data.testData.app_requested_start_date_edit_btn +
        "')]"
    ).waitForClickable({
      timeout: 10000,
    });
    await $(
      "//button[contains(.,'" +
        test_data.testData.app_requested_start_date_edit_btn +
        "')]"
    ).click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // Set ご融資希望日 to current date (Japan)
    var date1string = new Date(Date.now()).toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
    });
    var date = new Date(date1string);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    const lbl = await $(
      "//label[contains(.,'" +
        test_data.testData.app_requested_start_date_lbl +
        "')]"
    );
    await lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.app_requested_start_date_lbl +
        "']/@for]"
    ).setValue(year + "/" + month + "/" + day);
    await browser.pause(3000);
    await browser.keys(["Escape"]);
    await browser.pause(1000);

    // Screenshot - edit page
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await $(".//*[@class='main-container slds-grid']").$(function () {
      var middle = document.getElementsByClassName("col main-col slds-col");
      var height = middle.offsetHeight;
      this.style = "height:" + height + "px!important";
    });
    await $(
      ".//records-form-footer[contains(., '" +
        test_data.testData.save_btn +
        "')]"
    ).$(function () {
      var height = document.getElementsByClassName(
        "col main-col slds-col"
      ).offsetHeight;
      this.style.marginTop = height + this.height + "px";
      (this.style.marginBottom = "-100px"), (this.style.position = "static");
    });
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );

    // Save Edit
    await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    ).click();
    await browser.pause(40000);

    // Screenshot
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
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
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Jsforce Connection
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

    // Open dev console
    await util.Developer_Console(
      test_data.testData.query_0012_24_1 +
        "'" +
        test_data.testData.cron_name +
        "'"
    );
    await browser.pause(5000);

    // Screenshot - developer console
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-4" +
        test_data.testData.data
    );

    // Click Query Editor
    await util.Developer_Console(
      test_data.testData.query_0012_24_2 +
        "'" +
        test_data.testData.cron_id +
        "'"
    );
    await browser.pause(5000);

    // Screenshot - developer console
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-5" +
        test_data.testData.data
    );

    // Logout
    await parent.Logout();
  });
}
