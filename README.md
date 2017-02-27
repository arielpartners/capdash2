# Capacity Dashboard 2.0

This application serves as an example for the proposed new Reference Architecture that will be used going forward 
for NYC Dept of Homeless Services.  It is based on Shelter Capacity Dashboard (CapDash).  CapDash was selected 
an an example for the since it is a relatively straightforward application.

## Project Vision

The number of New York City homeless and those seeking temporary shelter has grown substantially over the past few years, creating significant 
challenges with respect to the task of ensuring that every person in need is assigned to an appropriate shelter on a nightly basis.  
DHS constantly experiences extremely tight shelter capacity, and often requires emergency expansions of capacity.  The capacity constraints, 
the fact that actual demand is often not clear until midnight, along with the need to match clients to shelters that can address any special needs, 
makes it extremely important that DHS has an accurate and up to date understanding of shelter capacity and that DHS optimizes the availability 
and use of existing units/beds.  

Shelter Capacity Dashboard v2 (CapDash2) is a new software application that will give DHS the tools needed to create and manage plans that 
optimize shelter utilization and minimize costs while fulfilling the DHS mission of providing appropriate shelter to every person in need.  
CapDash2 will leverage key statistical information such as known seasonal periods of high or low demand to improve the quality of forecasting.  
By incorporating regularly-updated data feeds from CARES and other key data sources both within and outside DHS, CapDash2 will also enable DHS 
to modify both future forecasts and current plans as they work with shelters throughout each evening. CapDash2 will enable DHS to test out 
alternative future scenarios and compare the costs of future plans given differing sets of assumptions, which may be used to help forecast 
DHS budgetary needs.  Since offline units reduce capacity and impact both short-term and long-term capacity planning, CapDash2 will track 
offline units and the plans and timelines for bringing them back online. Lastly, CapDash2 will track commercial hotel reservations made by 
DHS Procurement Card (P-Card) holders and match them against their actual usage over time, while facilitating reconciliation with applicable 
P-Card charges. The ability to accurately capture commercial hotel reservations and usage (many of which are made at the last minute) improves 
CPD’s ability to report, manage, and budget for this activity. P-Card reconciliation capabilities reduce DHS’s risks associated with reporting 
errors, mistaken/unused purchases, or malfeasance.

Phase one of CapDash2 will have both a business and a technical goal: it will significantly improve our ability to forecast capacity and demand 
by leveraging statistics from prior years and applying seasonal patterns of high and low shelter utilization.  It will also serve as a reference 
implementation of the DHS Enterprise Architecture, meeting security, scalability and maintainability requirements, and serve as an example for 
subsequent applications. Phase two of CapDash2 will incorporate additional CapDash1 features including P-Card transaction tracking, offline unit 
tracking, and commercial hotels reservation information, while adding a service that both reads data from and makes updates to CARES, the system 
of record for much (though not all) of the information. Phase two will consolidate current systems such as CapDash1 and the Commercial Hotels 
Tracker spreadsheet, while providing a single system that both Intake and Vacancy Control (IVC, adults), and Homeless Emergency Referral Operation 
(HERO, families with children) can use to manage information not contained within CARES.  Easy modification, undo, auditing, and reconciliation of 
up-to-the-minute information will also improve our ability to predict intra-day capacity changes, and improve accuracy of forecasts.

The new system will provide significant qualitative improvements.  Overcoming neighborhood resistance to opening new shelters is difficult, and the 
ability to provide side by side financial projections that demonstrate the impact of right sizing capacity will greatly strengthen the case.  
Phase two will provide even more substantial benefits: although data feeds from CARES exist today, having a service to which applications can subscribe 
to receive CARES updates in near real-time, and which also enables applications to update CARES while preserving data integrity will confer significant 
benefits that extend well beyond CapDash2.  Although initially limited in scope to just what CapDash2 needs, the CARES micro-service will provide 
opportunities for organizational learning and will pave the way for DHS to develop additional CARES micro-services in the future, ultimately making 
CARES a first-class citizen in the Enterprise Architecture.  Making CARES data available as a set of services will speed development, and reduce the 
risk associated with possible future CARES-related efforts such as upgrades or even partial replacement.  Perhaps most importantly, DHS faces risks 
if we do not create a CARES service: The proliferation of new applications with the ability to update data sourced from CARES increases double-entry 
of data, increases the burden of manual reconciliation, and increases the risk of potential reconciliation failures leading to dirty data.

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
  * It may be necessary to perform the following, depending on the order of installation: `sudo xcode-select -switch /Library/Developer/CommandLineTools`
  * See [Stack Overflow](http://stackoverflow.com/questions/17980759/xcode-select-active-developer-directory-error/17980786#17980786) for more details

3. **Install Homebrew**
  * Install homebrew `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  * Ensure Homebrew is installed and working properly `brew doctor`

4. **Install git**
  * `brew update`
  * `brew install git`
  * Follow [these instructions](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/) to add an ssh key to your github account.

5. **Clone this repo**
  * `git clone git@github.com:arielpartners/capdash2.git`
  
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
  * check the version `sudo npm ls -g @angular/cli` it should be 1.0.0-rc.0

6. **Install JetBrains WebStorm**
  * [Download Jetbrains](https://www.jetbrains.com/webstorm/download/)
  * Go to Preferences/Version Control/GitHub and generate token, then test it
  * This will make sure that WebStorm still works if you move to 2FA
  
### Backend

1. **Install Ruby Version Manager (rvm)**
  * Execute `\curl https://raw.githubusercontent.com/rvm/rvm/master/binscripts/rvm-installer | bash -s stable
`

### Database

1. **Install Docker**
  * Install [Docker Toolbox](https://www.docker.com/products/docker-toolbox)

2. **Create Postgres Docker Image**
  * Run `Kitematic` and click on `+NEW` next to Containers in the top left.
  * Type `Postgres` in the Searchbox where it says "Search for Docker images from Docker Hub"
  * The top hit will be the "official" Postgres image.  Click `Create`
  
3. **Start Postgres Docker Image**
  * Execute `sudo docker run --name postgres -e POSTGRES_PASSWORD=password -d postgres`
  
4. **Test Postgres using PSQL from the command line**
  * Execute `docker run -it --rm --link postgres:postgres postgres psql -h postgres -U postgres`
  * At the prompt type `SELECT 1;`
  * You should see 1 returned
  * Ctrl-D to exit
  
5. **Configuration values for Rails**
  * User: postgres
  * Password: password
  * Database: postgres