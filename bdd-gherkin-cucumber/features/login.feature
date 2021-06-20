
Feature: The Internet Guinea Pig Website

  Scenario Outline: User can log into the secure area

    Given User is on the "login" page
    When User logins with <username> and <password>
    Then User should see a flash message saying "<message>"

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
