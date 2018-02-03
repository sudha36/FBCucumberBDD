Feature: Facebook Signup

Scenario: Facebook Create a new Account scenario

#Given user is already on Login Page
When title of login page is Facebook - Log In or Sign Up
Then user enters Signup credentials
|FName|LName|EmailId|ReEmail|Pwd|
| def  | def | def@gmail.com | def@gmail.com|test123| 
| abdc  | abdc | abdc@gmail.com | abdc@gmail.com|test123| 
#Then user select birthday from drop down
#Then user check one of the radoi button
#Then user clicks on create account button
Then user is on homepage
Then Close the browser
