
Feature: User can press key and see the result on screen

  Scenario Outline: User can press key <key>

    Given User is on the "key_presses" page
    When User presses key "<key>"
    Then User should see a message containing "<key>"

    Examples:
      | key    |
      | A      |
      | Enter  |
      | Alt    |