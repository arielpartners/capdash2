Feature: Shelters Index
  As a capdash user,
  I want to see the list of shelters
  so that I can identify shelter buildings and navigate to provider information

@ignore
Scenario: list all shelters
  Given Shelters in the system
  When I navigate to /shelters
  Then I should receive a list of all shelters
