"use strict";

const user_info = require("../test_data/global_info");
const test_data = require("../test_data/test_info_utility");

/**
 * |================================================================================================|
 * | Modify DOM of Salesforce Modal to occupy full page                                             |
 * | Description: Use for items that needs the screenshot of Create New/Edit modals in Salesforce.  |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Jeamel                                                                        |
 * | Date modified: 3/10/2023                                                                       |
 * |================================================================================================|
 */
export async function modal_fullpage() {
  await $(function () {
    // Height of the form when scrolled (additional 150px for the header and footer)
    var height =
      document.getElementsByClassName("actionBody")[0].scrollHeight + 150;
    var container = document.getElementsByClassName(
      "modal-container slds-modal__container"
    )[0];
    var modal = document.getElementsByClassName(
      "panel slds-modal slds-fade-in-open"
    )[0];
    // Adopt the height of the form to the Modal container
    container.style.height = height + "px";
    // Change the position of the modal to absolute so that the full screenshot can be captured
    modal.style = "position:absolute !important";
  });
  await browser.pause(5000);
}

/**
 * |================================================================================================|
 * | Modify DOM of APP page Modal to occupy full page  (Direct from BA field)                       |
 * | Description: Modal for BA record creation direct from 返済用銀行口座 field in APP page          |
 * | Version: v1.1                                                                                  |
 * | Modified by: GDC)Jeamel                                                                        |
 * | Date modified: 6/7/2023                                                                        |
 * |================================================================================================|
 */
export async function modal_fullpage2() {
  await $(function () {
    // Height of the form when scrolled (additional 150px for the header and footer)
    var height =
      document.getElementsByClassName(
        "modal-body scrollable slds-modal__content slds-p-around--medium"
      )[0].scrollHeight + 250;
    var container = document.getElementsByClassName(
      "modal-container slds-modal__container"
    )[0];
    var modal = document.getElementsByClassName(
      "panel slds-modal slds-fade-in-open"
    )[0];
    // Adopt the height of the form to the Modal container
    container.style.height = height + "px";
    // Change the position of the modal to absolute so that the full screenshot can be captured
    modal.style = "position:absolute !important";
  });
  await browser.pause(2000);
}

/**
 * |================================================================================================|
 * | Modify DOM of MyPage Modal to occupy full page                                                 |
 * | Description: Use for items that need  the screenshot of Create New modals in MyPage.           |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Jeamel                                                                        |
 * | Date modified: 4/3/2023                                                                        |
 * |================================================================================================|
 */
export async function modal_fullpage_mypage() {
  await $(function () {
    var dialogxpath =
      "/html/body/div[3]/div[2]/div/div[2]/div/div/c-fj_-community_-application-detail/lightning-record-edit-form/lightning-record-edit-form-create/form/slot/slot/section";
    var dialog = document.evaluate(
      dialogxpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
    // Height of the form when scrolled (additional 50px for the header and footer)
    var heightxpath =
      "/html/body/div[3]/div[2]/div/div[2]/div/div/c-fj_-community_-application-detail/lightning-record-edit-form/lightning-record-edit-form-create/form/slot/slot/section/div/div";
    var height =
      document.evaluate(
        heightxpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue.height + 50;
    var containerxpath =
      "/html/body/div[3]/div[2]/div/div[2]/div/div/c-fj_-community_-application-detail/lightning-record-edit-form/lightning-record-edit-form-create/form/slot/slot/section/div";
    var container = document.evaluate(
      containerxpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
    // Adopt the height of the form to the Modal container
    container.style = "height:" + height + "px";
    // Change the position of the modal to absolute so that the full screenshot can be captured
    dialog.style = "position:absolute !important";
  });
  await browser.pause(2000);
}

/**
 * |================================================================================================|
 * | Modify DOM of MyPage RDC Record View Modal to be viewed in full in page                        |
 * | Description: Use when viewing RDC record in MyPage to capture RDC view modal evidence          |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Gizelle                                                                       |
 * | Date modified: 8/29/2023                                                                       |
 * |================================================================================================|
 */
export async function rdc_modal_fullpage_mypage() {
  await $(function () {
    var dialogxpath =
      "/html/body/div[3]/div[2]/div/div[2]/div/div/c-fj_-community_-application-detail/div/c-fj_-community_-required-doc-view/lightning-card/article/div[2]/slot/section";
    var dialog = document.evaluate(
      dialogxpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
    var height = 1200;
    var containerxpath =
      "/html/body/div[3]/div[2]/div/div[2]/div/div/c-fj_-community_-application-detail/div/c-fj_-community_-required-doc-view/lightning-card/article/div[2]/slot/section/div";
    var container = document.evaluate(
      containerxpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
    // Adopt the height of the form to the Modal container
    container.style = "height:" + height + "px";
    // Change the position of the modal to absolute so that the full screenshot can be captured
    dialog.style = "position:absolute !important";
  });
  await browser.pause(2000);
}

/**
 * |================================================================================================|
 * | Click 確定 button inside custom RDC table in VER record                                        |
 * | Description: Use when clicking 確定 button inside custom RDC table in VER record               |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Gizelle                                                                       |
 * | Date modified: 8/29/2023                                                                       |
 * |================================================================================================|
 */
export async function Click_RDC_confirm_button_in_VER_record() {
  const parent_container = await $("one-record-home-flexipage2");

  const rdc_confirm_btn = await parent_container.$(
    "//div[@class='slds-m-top_small slds-m-left_small slds-p-bottom_small']//button[@class='slds-button slds-button_brand']"
  );
  let clickable = await rdc_confirm_btn.isClickable();
  console.log("is clickable: " + clickable);

  await browser.execute((rdc_confirm_btn) => {
    rdc_confirm_btn.click();
  }, rdc_confirm_btn);
}

/**
 * |================================================================================================|
 * | Modify DOM of MyPage Modal to occupy full page (HL)                                            |
 * | Description: Use for items that need the screenshot of Create New BA modal (1st page) in MyPage|
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Jeamel                                                                        |
 * | Date modified: 9/8/2023                                                                        |
 * |================================================================================================|
 */
export async function hl_modal_fullpage_mypage() {
  await $(function () {
    var dialogxpath =
      "/html/body/div[3]/div[2]/div/div[2]/div/div/c-fj-h-l_-community_-application-detail/section";
    var dialog = document.evaluate(
      dialogxpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
    // Height of the form when scrolled (additional 50px for the header and footer)
    var heightxpath =
      "/html/body/div[3]/div[2]/div/div[2]/div/div/c-fj-h-l_-community_-application-detail/section/div/div";
    var height =
      document.evaluate(
        heightxpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue.height + 50;
    var containerxpath =
      "/html/body/div[3]/div[2]/div/div[2]/div/div/c-fj-h-l_-community_-application-detail/section/div";
    var container = document.evaluate(
      containerxpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
    // Adopt the height of the form to the Modal container
    container.style = "height:" + height + "px";
    // Change the position of the modal to absolute so that the full screenshot can be captured
    dialog.style = "position:absolute !important";
  });
  await browser.pause(2000);
}

/**
 * |================================================================================================|
 * | Modify DOM of MyPage Modal to occupy full page (HL)                                            |
 * | Description: Use for items that need the screenshot of Create New BA modal (2nd page) in MyPage|
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Jeamel                                                                        |
 * | Date modified: 9/8/2023                                                                        |
 * |================================================================================================|
 */
export async function hl_modal_fullpage_mypage2() {
  await $(function () {
    var dialogxpath =
      "/html/body/div[3]/div[2]/div/div[2]/div/div/c-fj-h-l_-community_-application-detail/lightning-record-edit-form/lightning-record-edit-form-create/form/slot/slot/section";
    var dialog = document.evaluate(
      dialogxpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
    // Height of the form when scrolled (additional 50px for the header and footer)
    var heightxpath =
      "/html/body/div[3]/div[2]/div/div[2]/div/div/c-fj-h-l_-community_-application-detail/lightning-record-edit-form/lightning-record-edit-form-create/form/slot/slot/section/div/div";
    var height =
      document.evaluate(
        heightxpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue.height + 50;
    var containerxpath =
      "/html/body/div[3]/div[2]/div/div[2]/div/div/c-fj-h-l_-community_-application-detail/lightning-record-edit-form/lightning-record-edit-form-create/form/slot/slot/section/div";
    var container = document.evaluate(
      containerxpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
    // Adopt the height of the form to the Modal container
    container.style = "height:" + height + "px";
    // Change the position of the modal to absolute so that the full screenshot can be captured
    dialog.style = "position:absolute !important";
  });
  await browser.pause(2000);
}

/**
 * |================================================================================================|
 * | Login to Outlook                                                                               |
 * | Description: Use when logging in to Outlook to capture e-mail message evidence                 |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Jeamel                                                                        |
 * | Date modified: 6/28/2023                                                                       |
 * |================================================================================================|
 */
export async function Login_to_Outlook(email, password) {
  // Go to Outlook
  await browser.url(user_info.userInformation.var_outlook_url);
  await browser.pause(2000);

  if (test_data.testData.logged_mail == test_data.testData.isFalse) {
    // Login
    await $(".//input[@type='" + test_data.testData.e_email + "']").setValue(
      email
    );
    await $(".//input[@type='" + test_data.testData.submit_btn + "']").click();
    await browser.pause(2000);
    await $(".//input[@type='" + test_data.testData.e_pw + "']").setValue(
      password
    );
    await $(".//input[@type='" + test_data.testData.submit_btn + "']").click();
    await browser.pause(2000);
    await $(".//input[@id='" + test_data.testData.e_no + "']").click();
    await browser.pause(10000);
    test_data.testData.logged_mail = test_data.testData.isTrue;

    var isLoaded = test_data.testData.isFalse;
    // Check if page loaded
    while (isLoaded != test_data.testData.isTrue) {
      isLoaded = await browser.execute(() => {
        if (document.readyState === "complete") {
          return true;
        }
      });
      await browser.pause(5000);
    }
  }
}

/**
 * |================================================================================================|
 * | Go to MyPage                                                                                   |
 * | Description: Use when capturing evidence of MyPage login page                                  |
 * | Version: v1.3                                                                                  |
 * | Modified by: GDC)Zinna                                                                         |
 * | Date modified: 7/07/2023                                                                       |
 * |================================================================================================|
 */
export async function Go_to_MyPage(mypage_url, uname, pword, type) {
  // Go to My Page
  if (
    (await browser.getUrl()) != user_info.userInformation.var_sf_mypage_loginurl
  ) {
    if (mypage_url != "") {
      await browser.url(mypage_url);
    } else {
      await browser.url(user_info.userInformation.var_sf_mypage_loginurl);
    }
  }
  await browser.pause(10000);

  switch (type) {
    case 1:
      if (
        uname != "" &&
        pword != "" &&
        (await browser.getUrl()) ==
          user_info.userInformation.var_sf_mypage_loginurl
      ) {
        // Login to My Page
        await $(
          ".//input[@type='" +
            test_data.testData.m_type1 +
            "'] [@class='" +
            test_data.testData.m_class +
            "']"
        ).setValue(uname);
        await browser.pause(1000);
        await $(
          ".//input[@type='" +
            test_data.testData.m_type2 +
            "'] [@class='" +
            test_data.testData.m_class +
            "']"
        ).setValue(pword);
        await browser.pause(1000);
      }
      break;
    default:
      if (
        uname != "" &&
        pword != "" &&
        test_data.testData.logged_mypage == test_data.testData.isFalse
      ) {
        // Login to My Page
        await $(
          ".//input[@type='" +
            test_data.testData.m_type1 +
            "'] [@class='" +
            test_data.testData.m_class +
            "']"
        ).setValue(uname);
        await $(
          ".//input[@type='" +
            test_data.testData.m_type2 +
            "'] [@class='" +
            test_data.testData.m_class +
            "']"
        ).setValue(pword);
      }
  }
}

/**
 * |================================================================================================|
 * | Login to MyPage                                                                                |
 * | Description: Use when logging in to MyPage                                                     |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Jeamel                                                                        |
 * | Date modified: 6/28/2023                                                                       |
 * |================================================================================================|
 */
export async function Login_to_MyPage(mypage_url, uname, pword) {
  // Go to MyPage
  await Go_to_MyPage(mypage_url, uname, pword);

  if (test_data.testData.logged_mypage == test_data.testData.isFalse) {
    const login_btn = await $(
      "//button[@type='" + test_data.testData.m_login + "']"
    );
    await login_btn.click();
    await browser.pause(15000);
    test_data.testData.logged_mypage = test_data.testData.isTrue;
  }
}

/**
 * |================================================================================================|
 * | Remove header                                                                                  |
 * | Description: Use capturing screenshot of authentication and application form page (tab 0001)   |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Jeamel                                                                        |
 * | Date modified: 6/28/2023                                                                       |
 * |================================================================================================|
 */
export async function Remove_header(type) {
  switch (type) {
    case 1: // Remove only .m_head_wrap
      // Remove header
      await browser.execute(() => {
        const elemToRemove = $(".m_head_wrap");
        elemToRemove.remove();
      });
      break;

    case 2: // Also remove scroll class
      // Remove header
      await browser.execute(() => {
        const elemToRemove = $(".m_head_wrap");
        elemToRemove.remove();
        const body = $("body");
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();

          if (scroll >= 200) {
            body.removeClass("scroll");
          }
        });
      });
      break;
  }
}

/**
 * |================================================================================================|
 * | Open Salesforce Record URL                                                                     |
 * | Description: Use to navigate to Salesforce record and related list pages                       |
 * | Version: v1.1                                                                                  |
 * | Modified by: GDC)John                                                                          |
 * | Date modified: 7/27/2023                                                                       |
 * |================================================================================================|
 */
export async function Open_SF_Record_URL(url_type, object, id, object_r) {
  // url_type = 1 - record page
  // url_type = 2 - related list page
  // url_type - 3 - edit
  switch (url_type) {
    case 1:
      // Open URL record
      await browser.url(
        user_info.userInformation.var_sf_sfurl +
          "r/" +
          object +
          "/" +
          id +
          "/view"
      );
      await browser.pause(15000);
      await expand_collapsed_page_section();
      break;

    case 2:
      // Open URL record related list
      await browser.url(
        user_info.userInformation.var_sf_sfurl +
          "r/" +
          object +
          "/" +
          id +
          "/related/" +
          object_r +
          "/view"
      );
      await browser.pause(15000);
      break;

    case 3:
      // Open URL record with edit
      await browser.url(
        user_info.userInformation.var_sf_sfurl +
          "r/" +
          object +
          "/" +
          id +
          "/edit"
      );
      await browser.pause(15000);
      break;
  }
}

/**
 * |================================================================================================|
 * | Scroll to related list                                                                         |
 * | Description: Use to scroll into view the specified related list header                         |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Jeamel                                                                        |
 * | Date modified: 6/28/2023                                                                       |
 * |================================================================================================|
 */
export async function Scroll_to_related_list(header_n) {
  // ★ 新環境適用' New Env Implementation
  // Scroll to view - related list
  const count = await $$("//div[@class='listWrapper']").length;
  for (var i = 0; i < count; i++) {
    const header = await $(
      "//div[@class='listWrapper'][contains(., '" + header_n + "')]"
    );
    if (header.isExisting()) {
      await header.$(function () {
        this.scrollIntoView({ block: "center" });
      });
    } else {
      await $$("//div[@class='listWrapper'][" + i + "]").$(function () {
        this.scrollIntoView();
      });
    }
  }
  await browser.pause(5000);
}

/**
 * |================================================================================================|
 * | Search mail by date                                                                            |
 * | Description: Use to search for mail using received date                                        |
 * | Version: v1.1                                                                                  |
 * | Modified by: GDC)Jeamel                                                                        |
 * | Date modified: 7/20/2023                                                                       |
 * |================================================================================================|
 */
export async function Search_mail_by_date(mail_time) {
  // Convert creation date
  // ***NOTE: Change TimeZone based on mail timezone***
  const creationdate = new Date(mail_time).toLocaleDateString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });

  // Search for e-mails received at creation date
  const search = $(".//input[@id='" + test_data.testData.e_search + "']");
  await search.waitForExist({ timeout: 30000 });
  await browser.pause(3000);
  await search.click();
  await browser.pause(3000);
  await search.setValue("received: " + creationdate);
  await browser.keys("\uE007");
  await browser.pause(5000);

  // Convert creation time
  let creationtime = new Date(mail_time);

  // Open e-mail received at creation time ((+)2 minutes)
  for (var i = 0; i < 3; i++) {
    let timestring = creationtime.toLocaleTimeString("ja-JP", {
      timeZone: "Asia/Tokyo",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
    let exists = await $(".//span[contains(.,'" + timestring + "')]");
    if ((await exists.isExisting()) === false) {
      creationtime.setMinutes(creationtime.getMinutes() + i);
    } else {
      await exists.scrollIntoView();
      await exists.click();
      break;
    }
  }
}

/**
 * |================================================================================================|
 * | Search mail by APP name                                                                        |
 * | Description: Use to search for mail using APP record name  (used in tab 0001)                  |
 * | Version: v1.1                                                                                  |
 * | Modified by: GDC)Jeamel                                                                        |
 * | Date modified: 7/20/2023                                                                       |
 * |================================================================================================|
 */
export async function Search_mail_by_app(app_name, mail_time) {
  // Search for e-mails received
  const search = $(".//input[@id='" + test_data.testData.e_search + "']");
  await search.waitForExist({
    timeout: 30000,
  });
  await browser.pause(3000);
  await search.click();
  await browser.pause(3000);
  await search.setValue(app_name);
  await browser.pause(3000);
  await browser.keys("\uE007");
  await browser.pause(5000);

  // Convert creation time
  let creationtime = new Date(mail_time);

  // Open e-mail received at creation time ((+)2 minutes)
  for (var i = 0; i < 3; i++) {
    let timestring = creationtime.toLocaleTimeString("ja-JP", {
      timeZone: "Asia/Tokyo",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
      hourCycle: "h23",
    });
    let exists = await $(".//span[contains(.,'" + timestring + "')]");
    if ((await exists.isExisting()) === false) {
      creationtime.setMinutes(creationtime.getMinutes() + i);
    } else {
      await exists.scrollIntoView();
      await exists.click();
      break;
    }
  }
}

/**
 * |================================================================================================|
 * | View full E-mail                                                                               |
 * | Description: Use to view the full message body of the e-mail,                                  |
 * |              use zoom_level to change zoom when necessary                                      |
 * | Version: v1.1                                                                                  |
 * | Modified by: GDC)Gizelle                                                                        |
 * | Date modified: 8/29/2023                                                                       |
 * |================================================================================================|
 */
export async function View_full_email(zoom_level) {
  // Click Print
  await browser.switchWindow("Outlook");
  await $(
    "button[aria-label='" + test_data.testData.e_actions + "']"
  ).waitForDisplayed({ timeout: 20000 });
  await $("button[aria-label='" + test_data.testData.e_actions + "']").click();
  await browser.pause(5000);
  await $(
    "button[aria-label='" + test_data.testData.e_print + "']"
  ).waitForDisplayed({ timeout: 10000 });
  await browser.pause(10000);
  await $("button[aria-label='" + test_data.testData.e_print + "']").click();
  await browser.pause(10000);
  await browser.execute("document.body.style.zoom='" + zoom_level + "'");
  await browser.pause(10000);
}

/**
 * |================================================================================================|
 * | Application Record Scrolling Elements                                                          |
 * | Description: Scroll the elements of APP record to fully capture the screenshot                 |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Zinna                                                                         |
 * | Date modified: 6/28/2023                                                                       |
 * |================================================================================================|
 */

export async function Application_Record_Scrolling(type) {
  switch (type) {
    case 1: // App First Tab
      // Go to 申込内容 tab
      await $(".//li[@title='" + test_data.testData.app_tab1 + "']").click();
      await browser.pause(5000);

      // Scroll to last section of first tab
      const lastsection = await $(
        ".//h3[contains(., '" +
          test_data.testData.app_first_tab_lastheader +
          "')]"
      ).nextElement();
      await lastsection.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      await browser.pause(5000);
      break;

    case 2: // App Second Tab
      const related_list_container = await $(
        "//flexipage-component2[@data-target-selection-name='force_relatedListContainer']"
      );

      const bottom_related_list_header = await related_list_container.$(
        "//h2[contains(., '" +
          test_data.testData.bottom_related_list_header +
          "')]"
      );

      // Scroll to the bottom related list
      await bottom_related_list_header.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      await browser.pause(10000);
      break;

    case 3: // App Third Tab
      // Go to 告知画面 tab
      await $(".//li[@title='" + test_data.testData.app_tab3 + "']").click();
      await browser.pause(5000);

      const related_list_container1 = await $(
        "//flexipage-component2[@data-target-selection-name='force_relatedListContainer']"
      );

      const bottom_related_list_header1 = await related_list_container1.$(
        "//h2[contains(., '" +
          test_data.testData.bottom_related_list_header +
          "')]"
      );

      // Scroll to the bottom related list
      await bottom_related_list_header1.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      await browser.pause(10000);
      break;

    case 4: // App Fourth Tab
      // Go to 実行画面 tab
      await $(".//li[@title='" + test_data.testData.app_tab4 + "']").click();
      await browser.pause(5000);

      const related_list_container2 = await $(
        "//flexipage-component2[@data-target-selection-name='force_relatedListContainer']"
      );

      const bottom_related_list_header2 = await related_list_container2.$(
        "//h2[contains(., '" +
          test_data.testData.bottom_related_list_header +
          "')]"
      );

      // Scroll to the bottom related list
      await bottom_related_list_header2.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      await browser.pause(10000);
      break;

    case 5: // App First Tab (HL)
      // Go to 申込登録 tab
      await $(".//li[@title='" + test_data.testData.appHL_tab1 + "']").click();
      await browser.pause(5000);

      // Scroll to last section of first tab (HL)
      const lastsectionHL = await $(
        ".//h3[contains(., '" +
          test_data.testData.appHL_first_tab_lastheader +
          "')]"
      ).nextElement();
      await lastsectionHL.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      await browser.pause(10000);
      break;

    case 6: // App Second Tab (HL)
      // Go to 申込詳細 tab
      await $(".//li[@title='" + test_data.testData.appHL_tab2 + "']").click();
      await browser.pause(5000);
      break;
  }
}

/**
 * |================================================================================================|
 * | 2nd INI Record 銀行審査②（取引情報取得）- Admin view                                             |
 * | Description: Used when logging in as admin and scroll the elements before screenshot the page  |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Zinna                                                                         |
 * | Date modified: 6/28/2023                                                                       |
 * |================================================================================================|
 */
export async function Second_INI_Record_Scrolling() {
  const related_list_ini = await $(
    "//flexipage-component2[@data-target-selection-name='force_relatedListContainer']"
  );

  const pro_related_list_header = await related_list_ini.$(
    "//h2[contains(., '" + test_data.testData.ini_scroll + "')]"
  );

  // Scroll to the bottom related list
  await pro_related_list_header.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
  await browser.pause(10000);
}

/**
 * |================================================================================================|
 * | Users Page                                                                                     |
 * | Description: Go to the Users Page in Salesforce for the users list                             |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Zinna                                                                         |
 * | Date modified: 6/28/2023                                                                       |
 * |================================================================================================|
 */
export async function Users_Page() {
  // Go to user page
  await browser.url(user_info.userInformation.var_sf_userpage);
  await browser.pause(30000);

  const users_frame = await browser.$(
    ".//iframe[@name[contains(.,'" + test_data.testData.users_iframe + "')]]"
  );
  await browser.pause(5000);
  await users_frame.waitForDisplayed({ timeout: 10000 });
  await browser.switchToFrame(users_frame);
}

/**
 * |================================================================================================|
 * | App Launcher                                                                                   |
 * | Description: Used when selecting new application - DLC/CL Originate                            |
 * | Version: v1.1                                                                                  |
 * | Modified by: GDC)Jeamel                                                                        |
 * | Date modified: 7/04/2023                                                                       |
 * |================================================================================================|
 */

export async function App_Launcher(app_type) {
  // App Launcher-CL Originate
  const applauncher = await $(
    ".//*[@aria-label='" + test_data.testData.app_launcher_btn + "']"
  );
  await applauncher.waitForClickable({ timeout: 30000 });
  await applauncher.click();
  await browser.pause(5000);
  // ★ 新環境適用' New Env Implementation
  await $(
    ".//input[@type='" +
      test_data.testData.app_elem1 +
      "'] [@role='" +
      test_data.testData.app_elem2 +
      "']"
  ).setValue(app_type);
  const origination = await $("span=" + app_type);
  await origination.waitForClickable({ timeout: 30000 });
  await origination.click();
  await browser.pause(5000);
}

/**
 * |================================================================================================|
 * | Toast Message                                                                                  |
 * | Description: Used when screenshot the toast message into savescreen before fully screenshot    |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Zinna                                                                         |
 * | Date modified: 6/28/2023                                                                       |
 * |================================================================================================|
 */
export async function Toast_Message() {
  // Toast
  const toast_elem = await $(
    ".//span[@class='toastMessage slds-text-heading--small forceActionsText']"
  );
  await toast_elem.waitForExist({ timeout: 100000 });
}

/**
 * |================================================================================================|
 * | Developer Console                                                                              |
 * | Description: Used when querying SOQL in Salesforce Developer Console                           |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Zinna                                                                         |
 * | Date modified: 6/29/2023                                                                       |
 * |================================================================================================|
 */
export async function Developer_Console(query_code) {
  // Go to Salesforce Developer Console
  await browser.url(user_info.userInformation.var_sf_dev_console);
  await browser.pause(10000);

  // Input query in textarea
  await $(".//button[contains(., 'Query Editor')]").click();
  await browser.pause(10000);
  await $("//textarea[@name='queryEditorText-inputEl']").setValue(query_code);

  // Click Execute button
  await $("//div[@id='queryExecuteButton']").click();
  await browser.pause(10000);
}

/**
 * |================================================================================================|
 * | Record Check                                                                                   |
 * | Description: Used when checking if record exists                                               |
 * | Version: v1.2                                                                                  |
 * | Modified by: GDC)Zinna                                                                         |
 * | Date modified: 7/11/2023                                                                       |
 * |================================================================================================|
 */
export async function Record_check(type, record) {
  switch (type) {
    case 1: // use for checking if single record id exists
      // Record check
      let status1 = test_data.testData.isFalse;
      if (record != test_data.testData.isUndefined && record != "") {
        status1 = test_data.testData.isTrue;
      }
      expect(status1).toEqual(test_data.testData.isTrue);
      break;
    case 2: // use for checking if array have contents
      // Record check
      let status2 = test_data.testData.isFalse;
      if (record.length > 0) {
        status2 = test_data.testData.isTrue;
      }
      expect(status2).toEqual(test_data.testData.isTrue);
      break;
    case 3:
      let status3 = test_data.testData.isFalse;
      if (record != test_data.testData.isUndefined) {
        status3 = test_data.testData.isTrue;
      }
      expect(status3).toEqual(test_data.testData.isTrue);
      break;
  }
}

/**
 * |================================================================================================|
 * | Record Counter Check                                                                           |
 * | Description: Used when checking if record exists for counting records (loop)                   |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Zinna                                                                         |
 * | Date modified: 7/11/2023                                                                       |
 * |================================================================================================|
 */
export async function Record_counter_check(record, counter) {
  // Record counter check
  let statuscounter1 = test_data.testData.isFalse;
  if (record == counter) {
    statuscounter1 = test_data.testData.isTrue;
  }
  expect(statuscounter1).toEqual(test_data.testData.isTrue);
}

/**
 * |================================================================================================|
 * | Search mail by date and email head chatter                                                     |
 * | Description: Use to search for mail using received date                                        |
 * | Version: v1.1                                                                                  |
 * | Modified by: GDC)Jeamel                                                                        |
 * | Date modified: 7/20/2023                                                                       |
 * |================================================================================================|
 */
export async function Search_chatter_mail_by_date() {
  // Convert creation date
  // ***NOTE: Change TimeZone based on mail timezone***
  const creationdate = new Date().toLocaleDateString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });

  // Search for e-mails received at creation date
  const search = $(".//input[@id='" + test_data.testData.e_search + "']");
  await search.waitForExist({ timeout: 30000 });
  await browser.pause(3000);
  await search.click();
  await browser.pause(3000);
  await search.setValue("received: " + creationdate);
  await browser.keys("\uE007");
  await browser.pause(5000);

  // Open e-mail received at creation time ((+)2 minutes)
  for (var i = 0; i < 3; i++) {
    let exists = await $(
      ".//span[contains(text(), '" +
        test_data.testData.email_header_chatter +
        "')]"
    );
    await exists.scrollIntoView();
    await exists.click();
    break;
  }
}

/**
 * |================================================================================================|
 * | Chatter textbox                                                                                |
 * | Description: Used in MyPage and Account page for entering text in textbox                      |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Zinna                                                                         |
 * | Date modified: 7/06/2023                                                                       |
 * |================================================================================================|
 */
export async function Chatter_textbox(textbox_value) {
  // Click the My Page textbox
  const chatter_textbox = await $(
    "//input[@type='text'] [@class='slds-input'] [@part='input']"
  );
  await chatter_textbox.$(function () {
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  await browser.pause(3000);
  await chatter_textbox.doubleClick();
  await browser.pause(3000);
  await $(
    ".//div[@class='ql-editor ql-blank slds-rich-text-area__content slds-text-color_weak slds-grow'] [@role='textbox']"
  ).setValue(textbox_value);
  await browser.pause(3000);
}

/**
 * |================================================================================================|
 * | Application scroll to top                                                                      |
 * | Description: Used to scroll to the top part of the application form                            |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Jeamel                                                                        |
 * | Date modified: 7/10/2023                                                                       |
 * |================================================================================================|
 */
export async function Application_form_scroll_top() {
  // Scroll to header
  await $(".//h1[@class='c_mainvisual_heading']").$(function () {
    this.scrollIntoView(false);
  });
}

/**
 * |================================================================================================|
 * | Deselect fields                                                                                |
 * | Description: Used to deselect/remove the hover fields after inserting texts                    |
 * | Version: v1.6                                                                                  |
 * | Modified by: GDC)Zinna                                                                         |
 * | Date modified: 7/27/2023                                                                       |
 * |================================================================================================|
 */
export async function Deselect_fields(type) {
  switch (type) {
    case 1: // use for Salesforce org (modal)
      // Deselect the hover/selected fields
      const deselect_sf = await $(
        "//h2[@class='slds-modal__title slds-hyphenate slds-text-heading--medium']"
      );
      await deselect_sf.click();
      await browser.pause(1000);
      break;
    case 2: // use for MyPage modals or some Salesforce modals
      // Deselect the hover/selected fields
      const deselect_mp = await $(
        "//h2[@class='slds-text-heading_medium slds-hyphenate']"
      );
      await deselect_mp.click();
      await browser.pause(1000);
      break;
    case 3: // use for Salesforce org (edit via record-using pencil icon)
      // Deselect the hover/selected fields
      const deselect = await $(
        "//div[@class='entityNameTitle slds-line-height--reset']"
      );
      await deselect.click();
      await browser.pause(1000);
      break;
    case 4: // use for Salesforce BA modals (related to modal_fullpage2)
      // Deselect the hover/selected fields
      const deselect_ba2 = await $(
        "//h2[@class='title slds-text-heading--medium slds-hyphenate']"
      );
      await deselect_ba2.click();
      await browser.pause(1000);
      break;
    case 5: // Use for MyPage App List
      // Deselect the hover/selected fields
      const deselect_app = await $(
        "//div[@class='slds-col--padded comm-content-header comm-layout-column']"
      );
      await deselect_app.click();
      await browser.pause(1000);
      break;
    case 6: // use for Salesforce related list
      // Deselect the hover/selected fields
      const deselect_related = await $(
        "//h1[@class='slds-page-header__title listViewTitle slds-truncate']"
      );
      await deselect_related.click();
      await browser.pause(1000);
      break;
    case 7: // use for WNT list view
      // Deselect the hover/selected fields
      const deselect_wnt_listview = await $(
        "//div[@class='slds-breadcrumb__item slds-line-height--reset']"
      );
      await deselect_wnt_listview.click();
      break;
    case 8: // use to deselect notif
      const deselect_notif = await $(
        "//div[@class='entityNameTitle slds-line-height_reset']"
      );
      await deselect_notif.click();
      await browser.pause(1000);
      break;
  }
}

/**
 * |================================================================================================|
 * | Highlight Panel                                                                                |
 * | Description: Used to scroll up to the highlight panel or top of the record                     |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Zinna                                                                         |
 * | Date modified: 7/14/2023                                                                       |
 * |================================================================================================|
 */
export async function Highlight_panel_scroll() {
  // Scroll up to highlights panel
  const highlight_panel = await $(
    ".//flexipage-component2[@data-target-selection-name='force_highlightsPanel']"
  );
  await highlight_panel.$(function () {
    this.scrollIntoView();
  });
  await browser.pause(1000);
}

/**
 * |================================================================================================|
 * | Upload image determiner check                                                                  |
 * | Description: Used to determine if the upload image is successfully uploaded (green check)      |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Zinna                                                                         |
 * | Date modified: 7/24/2023                                                                       |
 * |================================================================================================|
 */
export async function Upload_image_green_check() {
  // To determine if the upload has green check
  const green_check = await $(
    ".//lightning-icon[@class='slds-icon-utility-success slds-icon_container']"
  );
  await green_check.waitForDisplayed({ timeout: 60000 });
}

/**
 * |================================================================================================|
 * | View uploaded images                                                                           |
 * | Description: Used to select/view the uploaded images                                           |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Zinna                                                                         |
 * | Date modified: 7/24/2023                                                                       |
 * |================================================================================================|
 */
export async function View_images(selected_image) {
  switch (selected_image) {
    case 1: // Use to view the first image
      // View 1st attached file
      const first_file = await $(
        "//li[@data-aura-class='forceContentVirtualRelatedListStencil forceRecordLayout'][1]"
      );
      await first_file.waitForClickable({ timeout: 10000 });
      await first_file.click();
      await browser.pause(3000);
      break;
    case 2: // Use to view the second image
      const second_file = await $(
        "//li[@data-aura-class='forceContentVirtualRelatedListStencil forceRecordLayout'][2]"
      );
      await second_file.waitForClickable({ timeout: 10000 });
      await second_file.click();
      await browser.pause(3000);
      break;
  }
}

/**
 * |================================================================================================|
 * | Housing Loan Page                                                                              |
 * | Description: Used to select/view the housing loan home page                                    |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Zinna                                                                         |
 * | Date modified: 8/15/2023                                                                       |
 * |================================================================================================|
 */
export async function Housing_loan_homepage() {
  // Go to HL home page
  await $(
    ".//span[contains(.,'" + test_data.testData.housingloan_home + "')]"
  ).click();
  await browser.pause(10000);
}

/**
 * |================================================================================================|
 * | Expand Menu                                                                                    |
 * | Description: Used to click the arrow down and click the other menu items                       |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Zinna                                                                         |
 * | Date modified: 9/19/2023                                                                       |
 * |================================================================================================|
 */
export async function Expand_menu_item(type, menu_item) {
  switch (type) {
    case 1: // Click only the arrow down and screenshots only the list of menu lists
      // Expand the menu
      const menu_all_preview = await $(
        ".//button[@class='slds-button slds-button_icon-border-filled']"
      );
      await menu_all_preview.waitForClickable({ timeout: 10000 });
      await menu_all_preview.click();
      await browser.pause(5000);
      break;
    case 2: // Select the menu items
      // Expand the menu
      const menu_all = await $(
        ".//button[@class='slds-button slds-button_icon-border-filled']"
      );
      await menu_all.waitForClickable({ timeout: 10000 });
      await menu_all.click();
      await browser.pause(5000);

      const expand_menu = await $(".//lightning-button-menu").$(
        ".//runtime_platform_actions-ribbon-menu-item[@data-target-selection-name='" +
          menu_item +
          "']"
      );
      await expand_menu.waitForClickable({ timeout: 10000 });
      await expand_menu.click();
      await browser.pause(20000);
      break;
  }
}

/**
 * |================================================================================================|
 * | User iframe                                                                                    |
 * | Description: Used to call the iframe element of user page when editing/screenshot              |
 * | Version: v1.1                                                                                  |
 * | Modified by: GDC)Zinna                                                                         |
 * | Date modified: 10/18/2023                                                                       |
 * |================================================================================================|
 */
export async function User_iframe_element() {
  const users_frame = await browser.$(
    ".//iframe[@name[contains(.,'" + test_data.testData.users_iframe + "')]]"
  );
  await browser.switchToFrame(users_frame);
  await browser.pause(5000);
}

/**
 * |================================================================================================|
 * | Set user display density to comfy                                                              |
 * | Description: Use to check and set display density to comfy after user login                    |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Gizelle                                                                       |
 * | Date modified: 11/13/2023                                                                      |
 * |================================================================================================|
 */
export async function set_user_display_density() {
  // Click user profile icon
  const user_profile = await $(
    ".//button[@class='slds-button branding-userProfile-button slds-button slds-global-actions__avatar slds-global-actions__item-action forceHeaderButton']"
  );
  await user_profile.click();
  await browser.pause(5000);

  // Check display density
  const comfy_btn = await $(
    ".//button[@name='" + test_data.testData.comfy_btn + "']"
  );
  const current_attr_val = await comfy_btn.getAttribute("aria-pressed");
  console.log("current aria-pressed: " + current_attr_val);

  if (current_attr_val === "false") {
    await comfy_btn.click();
    await browser.pause(5000);

    // Confirm page refresh to change display density
    const refresh_now_confirm_btn = await $(
      ".//button[@title='" + test_data.testData.refresh_now_confirm_btn + "']"
    );
    await refresh_now_confirm_btn.click();
    await browser.pause(5000);
  } else {
    // Click user profile icon to close
    await user_profile.click();
    await browser.pause(5000);
  }
}

/**
 * |================================================================================================|
 * | Expand collapsed page sections                                                                 |
 * | Description: Use to expand collapsed page sections for each record detail page                 |
 * | Version: v1.0                                                                                  |
 * | Modified by: GDC)Gizelle                                                                       |
 * | Date modified: 11/13/2023                                                                      |
 * |================================================================================================|
 */
export async function expand_collapsed_page_section() {
  // Find all page sections that are not open
  const section_list = await $$(
    ".//div[contains(@class, 'slds-section') and contains(@class, 'has-header') and not(contains(@class, 'slds-is-open'))]"
  );

  if (section_list !== null) {
    for (var i = 0; i < section_list.length; i++) {
      const section_btn = await section_list[i].$(
        ".//h3/button[@aria-expanded='false']"
      );
      await section_btn.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      await section_btn.waitForDisplayed({ timeout: 50000 });
      await section_btn.waitForClickable({ timeout: 5000 });
      await section_btn.click();
      await browser.execute((section_btn) => {
        section_btn.blur();
      }, section_btn);
    }
  } else {
    console.log("***");
  }
}
