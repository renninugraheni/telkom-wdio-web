Feature: login page

Background: Open login page Bukalapak
Given a web browser is in sauce lab login page

Scenario: As a user, I can login using account standard_user and do transaction
# input valid username and password
When User can input username 'standard_user'
And User can input password 'secret_sauce'
And User click button login
Then  User will redirect to inventory page
When User add 2 product to shopping cart
And User click shopping cart link
Then User will redirect to cart page 
When User click checkout button
Then User redirect to checkout page
When User input information for checkout 
And User click continue button
Then User will redirect to overview page
When User click finish button
Then User will redirect to complete checkout page


