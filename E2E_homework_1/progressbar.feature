Feature: Progress bar homework
  
  @wip
  Scenario: User clicks on Stop button when progress bar has reached 75%
    Given User is on the progress bar page
    When User clicks on Start button
    And User waits till progress bar has reached 75%
    Then User clicks on Stop button