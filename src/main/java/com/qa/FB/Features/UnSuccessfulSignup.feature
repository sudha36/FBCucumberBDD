Feature: Facebook UnSuccessfulSignup


Scenario: Create a new Account with blank FirstName
When user enters inputs without FirstName
|FName|LName|EmailId|ReEmail|Pwd|
||Ten|Ten@yahoo.com|Ten@yahoo.com|Test12345|
Then verify the FirstName ErrorMessage


Scenario: Create Account with blank EmailId
When user enters inputs without BlankEmailId 
|FName|LName|EmailId|ReEmail|Pwd|
|Net|Net|Net@yahoo.com||Test12345|
Then verify the BlankEmailId ErrorMessage
