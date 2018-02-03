
Feature: Login Action

Scenario: Successful Login with Valid Credentials
#Given user is already on Login Page
When title of login page is Facebook - Log In or Sign Up
Then user enters "email" and "Pwd"
Then user is on home page
Then user click on TriangleButton
And click on LogOut Button
Then user is on the LoginPage
#Then close Brower