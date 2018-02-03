Feature: Fill a simple form with excel data

Scenario Outline: Data driven with excel and data sets
Given user is  on Main Page
Then user enters Signup Credentials with excel row "<row_index>" dataset
Examples:
|row_index|
|1|
|2|
