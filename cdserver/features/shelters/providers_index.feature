Feature: Providers Index
  As a capdash user,
  I want to see the list of providers
  so that I can see their administrative and billing information.

@ignore
Scenario: list all providers
  Given Providers in the system
  When I navigate to /providers
  Then I should see a list of all providers
