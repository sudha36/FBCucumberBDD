$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Murali/Desktop/selenium/FBBDDFramework/src/main/java/com/qa/FB/Features/UnSuccessfulSignup.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook UnSuccessfulSignup",
  "description": "",
  "id": "facebook-unsuccessfulsignup",
  "keyword": "Feature"
});
formatter.before({
  "duration": 21100299058,
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
  "duration": 14169274278,
  "status": "passed"
});
formatter.match({
  "location": "UnSuccessfulSignUpSteps.verify_the_FirstName_ErrorMessage()"
});
formatter.result({
  "duration": 100639897,
  "status": "passed"
});
formatter.after({
  "duration": 500580966,
  "status": "passed"
});
formatter.before({
  "duration": 20048019819,
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
  "duration": 12582815125,
  "status": "passed"
});
formatter.match({
  "location": "UnSuccessfulSignUpSteps.verify_the_BlankEmailId_ErrorMessage()"
});
formatter.result({
  "duration": 67271453,
  "status": "passed"
});
formatter.after({
  "duration": 516416083,
  "status": "passed"
});
});