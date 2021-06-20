
Feature: Status codes page

  Scenario Outline: User can check status code page <code> and return

    Given User is on the "status_codes" page
    When User clicks on the Status code with text <code>
    Then User sees the Status Code text with "<code>"
    And It is possible to go back to initial page

    Examples:
      | code |
      | 200  |
      | 301  |
      | 404  |
      | 500  |

  