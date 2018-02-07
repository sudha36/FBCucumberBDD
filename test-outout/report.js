$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Murali/Desktop/selenium/FBBDDFramework/src/main/java/com/qa/FB/Features/UnSuccessfulSignup.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook UnSuccessfulSignup",
  "description": "",
  "id": "facebook-unsuccessfulsignup",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6548042670,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Create a new Account with blank FirstName",
  "description": "",
  "id": "facebook-unsuccessfulsignup;create-a-new-account-with-blank-firstname",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user enters inputs without FirstName",
  "rows": [
    {
      "cells": [
        "FName",
        "LName",
        "EmailId",
        "ReEmail",
        "Pwd"
      ],
      "line": 6
    },
    {
      "cells": [
        "",
        "Ten",
        "Ten@yahoo.com",
        "Ten@yahoo.com",
        "Test12345"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "verify the FirstName ErrorMessage",
  "keyword": "Then "
});
formatter.match({
  "location": "UnSuccessfulSignUpSteps.user_enters_inputs_without_FirstName(DataTable)"
});
formatter.result({
  "duration": 8737480638,
  "status": "passed"
});
formatter.match({
  "location": "UnSuccessfulSignUpSteps.verify_the_FirstName_ErrorMessage()"
});
formatter.result({
  "duration": 59454621,
  "status": "passed"
});
formatter.after({
  "duration": 221605687,
  "status": "passed"
});
formatter.before({
  "duration": 7208300939,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Create Account with blank EmailId",
  "description": "",
  "id": "facebook-unsuccessfulsignup;create-account-with-blank-emailid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "user enters inputs without BlankEmailId",
  "rows": [
    {
      "cells": [
        "FName",
        "LName",
        "EmailId",
        "ReEmail",
        "Pwd"
      ],
      "line": 13
    },
    {
      "cells": [
        "Net",
        "Net",
        "Net@yahoo.com",
        "",
        "Test12345"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "verify the BlankEmailId ErrorMessage",
  "keyword": "Then "
});
formatter.match({
  "location": "UnSuccessfulSignUpSteps.user_enters_inputs_without_BlankEmailId(DataTable)"
});
formatter.result({
  "duration": 8134719189,
  "status": "passed"
});
formatter.match({
  "location": "UnSuccessfulSignUpSteps.verify_the_BlankEmailId_ErrorMessage()"
});
formatter.result({
  "duration": 58789619,
  "status": "passed"
});
formatter.after({
  "duration": 216789019,
  "status": "passed"
});
});