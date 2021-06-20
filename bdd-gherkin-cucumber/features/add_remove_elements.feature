
Feature: User can add and remove elements

  Background:
    Given User is on the "add_remove_elements/" page

  Scenario Outline: User can add <n> elements
    When User clicks on Add button <n> times
    Then User should see <n> Delete buttons

    Examples:
      | n |
      | 1 |
      | 2 |
      | 3 |

  Scenario: User can remove element
    When User clicks on Add button
    And User clicks on Delete button
    Then User should not see Delete button