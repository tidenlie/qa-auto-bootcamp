
Feature: User can check checkbox

    Background:
        Given User is on the "checkboxes" page
        And Checkbox 1 is unchecked and 2 - checked

    Scenario Outline: User check checkbox "<checked_ch>"
        When User clicks on checkbox "<checked_ch>"
        Then Checked Attribute of both checkboxes is "<checked_attribute>"


        Examples:
            | checked_ch | checked_attribute |
            | 1          | true              |
            | 2          | false             |
