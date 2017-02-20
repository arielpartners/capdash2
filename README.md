# Capacity Dashboard 2.0

This application serves as an example for the proposed new Reference Architecture that will be used going forward 
for NYC Dept of Homeless Services.  It is based on Shelter Capacity Dashboard (CapDash).  CapDash was selected 
an an example for the since it is a relatively straightforward application.

## Project Vision

The number of New York City homeless and those seeking temporary shelter has grown substantially over the past 
few years, creating significant challenges with respect to the task of ensuring that every person in need is 
assigned to an appropriate shelter on a nightly basis.  DHS constantly experiences extremely tight shelter 
capacity, and regularly requires emergency expansions of capacity.  The capacity constraints, the fact that 
actual demand is often not clear until midnight, along with the need to match clients to shelters that can 
address any special needs, makes it extremely important that DHS has an accurate and up to date understanding 
of shelter capacity and that we optimize the availability and use of existing units/beds.  

Shelter Capacity Dashboard (CapDash) is a new software application that will give users the tools they need 
to create and manage plans that maximize benefits and minimize costs while fulfilling the DHS mission of 
providing appropriate shelter to every person in need.  CapDash will leverage key statistical information 
such as known seasonal periods of high or low demand to improve the quality of forecasting.  By incorporating 
regularly-updated data feeds from CARES and other key data sources both within and outside DHS, CapDash will 
also enable users to modify both future forecasts and current plans as they work with shelters throughout 
each evening. CapDash will enable users to test out alternative future scenarios and compare the costs of 
future plans given differing sets of assumptions, which may be used to help forecast DHS budgetary needs.  Since 
offline units reduce capacity and impact both short-term and long-term capacity planning, CapDash 
will track offline units and the plans and timelines for bringing them back online. CapDash will provide 
the ability to reconcile purchases made by DHS Procurement Card (P-Card) holders to pay for maintenance 
and repair of units and to reserve commercial hotel rooms as needed.  Lastly, CapDash will track 
reservations that are made with commercial hotels and their usage over time, and facilitate 
reconciliation with applicable P-Card charges.

Please see the [Vision](./docs/CapDashVision.docx) for more details, as well as a domain glossary.

## Architecture

The new architecture consists of the following main pieces:

* [PostgreSQL Database](https://www.postgresql.org/about/) PostgreSQL database.
* [Ruby on Rails 5 Backend](http://rubyonrails.org) running in [API Mode](https://devblast.com/b/rails-5-api-mode-overview)
* [AngularJS 2 Frontend](https://angular.io) AngularJS 2
* [Twitter Bootstrap](http://getbootstrap.com) CSS styling framework

Additional technologies will be listed here or in the respective BE/FE readme files as they are incorporated into the application (e.g. Redis, Redux, etc.)

Please see the [Enterprise Architecture Stack](./docs/EnterpriseArchitectureStack-draft4.pptx) for more details regarding the proposed future-state architecture.

## Building the Application

Please see the [front-end README](./webapp/README.md) and [back-end README](./be/README.me) respectively.

## Running the Application

Environment | URL | test login | test password
--- | ---- | --- | --- |
Beta | http://localhost:8080 | testuser | testpassword |
Prod | http://localhost:8080 | testuser | testpassword |

## Prerequisites

The following steps are required in order to build and run the application as a developer.
These instructions work on a Mac.  They will be updated to cover a Windows 10 PC.

### Common

1. **Install Xcode**
  * Open App Store.
  * Search for Xcode.
  * Double-click to install.
 
2. **Install XCode Command Line Tools**
  * Open Terminal window.
  * Type `xcode-select --install`
  * Follow the prompts to install the command line developer tools

3. **Install Homebrew**
  * Install homebrew `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  * Ensure Homebrew is installed and working properly `brew doctor`

4. **Install git**
  * `brew update`
  * `brew install git`

### Frontend

1. **Install Node Version Manager (nvm)**
  * Nvm allows you to install multiple versions of Node.JS and switch between them easily.  This is very important if you are 
maintaining multiple applications or multiple versions of the same application.
  * See installation instructions on the [GitHub nvm page](https://github.com/creationix/nvm)
  * Execute install script `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash`
  * Verify that nvm is installed correctly `nvm ls`
  * You should not see any errors
  * Check the version `nvm --version` it should be 0.33.0

4. **Install Node.JS**
  * See latest version [here](https://nodejs.org/en/)
  * Install version 7.5.0 `nvm install 7.5.0`
  * Set 7.5.0 to be the default version `nvm alias default 7.5.0`
  * Make sure everything is set correctly: `nvm ls`

5. **Install global npm packages (angular-cli, npm-check-updates, typescript)**
  * Make sure you have the latest 4.2.0 version of npm `sudo npm install -g npm`
  * Check the version `sudo npm ls -g npm` it should be 4.2.0
  * Install typescript globally `sudo npm install -g typescript`
  * Check the version `sudo npm ls -g typescript` it should be 2.1.6
  * Install angular Command Line Interface globally `sudo npm install -g @angular/cli`
  * check the version `sudo npm ls -g @angular/cli` it should be 1.0.0-beta32.3

### Backend

TODO

### Database

TODO