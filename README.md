# Capacity Dashboard 2.0
This application serves as an example for the proposed new Reference Architecture that will be used going forward
for NYC Dept of Homeless Services.  It is based on Shelter Capacity Dashboard (CapDash).  CapDash was selected
an an example for the since it is a relatively straightforward application.

----
## Table of Contents
* [Project Vision](#project-vision)
* [Architecture](#architecture)
* [Building the Application](#building-the-application)
* [Running the Application](#running-the-aplication)
* [Prerequisites](#prerequisites)
    * [Common](#common)
    * [Frontend](#frontend)
    * [Database](#database)
    * [Backend](#backend)

----
## Project Vision

The number of New York City homeless and those seeking temporary shelter has grown substantially over the past few years, creating significant challenges with respect to the task of ensuring that every person in need is assigned to an appropriate shelter on a nightly basis. DHS constantly experiences extremely tight shelter capacity, and often requires emergency expansions of capacity.  The capacity constraints, the fact that actual demand is often not clear until midnight, along with the need to match clients to shelters that can address any special needs or reasonable accommodation requests, makes it extremely important that DHS has an accurate and up to date understanding of shelter capacity and that DHS optimizes the availability and use of existing units/beds.  

Shelter Capacity Dashboard v2 (CapDash2) is a new software application that will give DHS the tools needed to create and manage plans that optimize shelter utilization and minimize costs while fulfilling the DHS mission of providing appropriate shelter to every person in need.  CapDash2 will leverage key statistical information such as known seasonal periods of high or low demand to improve the quality of forecasting. By incorporating regularly-updated data feeds from CARES and other key data sources both within and outside DHS, CapDash2 will also enable DHS to modify both future forecasts and current plans as they work with shelters throughout each evening. CapDash2 will enable DHS to test out alternative future scenarios and compare the costs of future plans given differing sets of assumptions, which may be used to help forecast DHS budgetary needs.  Since offline units reduce capacity and impact both short-term and long-term capacity planning, CapDash2 will track offline units and the plans and timelines for bringing them back online. Lastly, CapDash2 will track commercial hotel reservations made by DHS Procurement Card (P-Card) holders and match them against their actual usage over time, while facilitating reconciliation with applicable P-Card charges. The ability to accurately capture commercial hotel reservations and usage (many of which are made at the last minute) improves CPD’s ability to report, manage, and budget for this activity. P-Card reconciliation capabilities reduce DHS’s risks associated with reporting errors, mistaken/unused purchases, or malfeasance.

Phase one of CapDash2 will have both a business and a technical goal: it will significantly improve our ability to forecast capacity and demand by leveraging statistics from prior years and applying seasonal patterns of high and low shelter utilization.  It will also serve as a reference implementation of the DHS Enterprise Architecture, meeting security, scalability and maintainability requirements, and serve as an example for subsequent applications. Phase two of CapDash2 will incorporate additional CapDash1 features including P-Card transaction tracking, offline unit tracking, and commercial hotels reservation information, while adding a service that both reads data from and makes updates to CARES, the system of record for much (though not all) of the information. Phase two will consolidate current systems such as CapDash1 and the Commercial Hotels Tracker spreadsheet, while providing a single system that both Intake and Vacancy Control (IVC, adults), and Homeless Emergency Referral Operation (HERO, families with children) can use to manage information not contained within CARES.  Easy modification, undo, auditing, and reconciliation of up-to-the-minute information will also improve our ability to predict intra-day capacity changes, and improve accuracy of forecasts.

Please see the [Vision](./docs/CapDashVision.docx) for more details, as well as a domain glossary.


----
## Architecture

The new architecture consists of the following main pieces:
* [PostgreSQL Database](https://www.postgresql.org/about/) PostgreSQL database.
* [Ruby on Rails 5 Backend](http://rubyonrails.org) running in [API Mode](https://devblast.com/b/rails-5-api-mode-overview)
* [AngularJS 4 Frontend](https://angular.io) AngularJS 4
* [Twitter Bootstrap](http://getbootstrap.com) CSS styling framework

Additional technologies will be listed here or in the respective BE/FE readme files as they are incorporated into the application (e.g. Redis, Redux, etc.)

Please see the [Enterprise Architecture Stack](./docs/EnterpriseArchitectureStack-draft4.pptx) for more details regarding the proposed future-state architecture.

----

## Fetching and Building the Application

NOTE: the client and server applications are now git submodules.  
This allows front-end and back-end developers to focus on their piece in isolation.
However, it means that if we want to fetch the entire tree and work with it as a single unit, we will have to perform some extra configuration steps.
See [this blog](https://medium.com/@porteneuve/mastering-git-submodules-34c65e940407) to learn more about git submodules.

### Configuring a combined repo

1. Clone the repo
 * `git clone --recursive git@github.com:arielpartners/capdash2.git`

2. Initialize, configure, and fetch the submodules
 * `chmod a+x ./utils/git-init-submodules; ./utils/git-init-submodules`

### Configuring front-end or back-end repo separately

Please see the [front-end README](./capdash2-client/README.md) and [back-end README](./capdash2-server/README.md) respectively.

----

## Running the Application
Assuming all the pre-requisites are fulfilled, you may start the application as follows:

1. `docker start postgres`
2. `cd capdash2-server; rails s`
3. `cd capdash2-client; npm start`
4. Use the following URL and login:

Environment | URL | test login | test password
--- | ---- | --- | --- |
Localhost | http://localhost:4200 | sample_user@dhs.nyc.gov | password |
Integration | http://tbd | ? | ? |
UAT | http://tbd | ? | ? |
Prod | http://tbd | ? | ? |

----
## Metadata for the Application

1. **Count lines of code**
  * `chmod a+x utils/count-sloc;utils/count-sloc`

2. **capdash2-client version number**
  * See version in [`capdash2-client/package.json`](./capdash2-client/package.json)

3. **Back-end version number**
  * See version in [`cdserver/config/initializers/application.rb`](./cdserver/config/initializers/application.rb)

----

## Prerequisites
The following set of tools and configurations are required in order to build and run the application as a developer. 

### Common
The following tools apply both to back-end and front-end development.  Follow the instructions based on your operating system. 
If following tools are already installed on your machine. You may skip the installation part, and start from cloning the repo.

**Installation for Windows**

 1. **Install CMDer**
  * CMDer is a Powershell replacement, download the full version with Git included
  *  Download [CMDer](http://cmder.net)

 2. **Install Chocolatey**
  * Chocolatey is a Homebrew-style package manager for windows
  * From Powershell or CMDer, run `iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex`
  * If that does not work, download the Chocolatey installation package manually, unzip it, and install it using the NuGet Package Manager (pre-installed on any newer versions of Visual Studio) using the instructions at https://chocolatey.org/install#install-downloaded-nuget-package-from-powershell.  Navigate to "More Install Options", click on "More Otions", then on "Install downloaded NuGet package from PowerShell".

**Installation for Mac or Linux**

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

**Clone the repo**

  * `git clone --recursive git@github.com:arielpartners/capdash2.git`
  * `chmod a+x ./utils/git-init-submodules; ./utils/git-init-submodules`

-----

### Frontend
#### 1. Install Node Version Manager (nvm)
Nvm allows you to install multiple versions of Node.JS and switch between them easily.  This is very important if you are
maintaining multiple applications or multiple versions of the same application.

**Installation for Windows**
  * Nvm allows you to install multiple versions of Node.JS and switch between them easily.  This is very important if you are maintaining multiple applications or multiple versions of the same application.
  * Using Chocolatey: `choco install nvm` (also available [here](https://github.com/coreybutler/nvm-windows))    

**Installation for Mac / Linux**
  * See installation instructions on the [GitHub nvm page](https://github.com/creationix/nvm)
  * Execute install script `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash`
  * Verify that nvm is installed correctly `nvm ls`
  * You should not see any errors
  * Check the version `nvm --version` it should be 0.33.0

#### 2. Install Node.JS
  * See latest version [here](https://nodejs.org/en/)
  * Install version 7.10.0 `nvm install 7.10.0`
  * Set 7.10.0 to be the default version `nvm alias default 7.10.0`
  * Make sure everything is set correctly: `nvm ls`

####  3. Install global npm package npm-check-updates
npm-check-updates provides a utility program "ncu" that automatically detects whether all packages in `packages.json` are up to date, and if not, what are the latest versions.
You can optionally tell `ncu` to update the settings in `package.json` to update everything to the latest versions in one go.  `npm install` is still needed to actually install the new packages.   Before the first production release, we try to keep all packages up-to-date.
After releasing to production, updates must be carefully planned to avoid application instability.
  * `npm install -g npm-check-updates`

####  4. Install JetBrains WebStorm
  * [Download Webstorm](https://www.jetbrains.com/webstorm/download/)
  * You should have the latest version (`2017.1.2` as of 5/20/2017)
  * Go to Preferences/Version Control/GitHub and generate token, then test it
  * This will make sure that WebStorm still works if you move to 2FA

####   5. Load the capdash2-client project, build and run
  * In Webstorm load (change directory to) capdash2-client
  * `npm install`
  * `npm start`
  * Above requires setting up database and starting Rails server from capdash2-server.  Alternatively, for dev, you can `npm run json-server` along with `npm start` in two terminal tabs.

----
### Database
####  1. Install Docker
* **Installation for Windows**  
   * Confirm that the PC has virtualization enabled: Launch the Task Manager, select the Performance tab, and confirm that "Virtualization : **Enabled**".  If not, enable virtualization in the BIOS: On an HP EliteDesk 800 G1, for instance, hold down F10 during the boot process, and the PC will enter the HP Setup Utility.  Pick Security -> System Securty.  Then enable Virtualization Technology (VTx) and Virtualization Technology Directed I/O (VTd).  Accept/Save changes by pressing F10.  The computer will reboot.  Then confirm that virtualization is enabled via the Task Manager.
   * Install [Docker for Windows](https://docs.docker.com/docker-for-windows/install/)

* **Installation for Mac / Linux**
   * Install [Docker Toolbox](https://www.docker.com/products/docker-toolbox)

####  2. Create Postgres Docker Image
 * Execute `docker pull postgres`
 * The alternative below could be made to work via some tweaking:
 * Run Kitematic and click on `+NEW` next to Containers in the top left.
 * Type `Postgres` in the Search box where it says "Search for Docker images from Docker Hub"
 * The top hit will be the "official" Postgres image.  Click `Create`

####  3. Create new or start up existing Postgres Docker Container
 * The first time, do the below.  This only needs to be done the first time:
  **Execute docker**
   * **Mac / Linux**
    `sudo docker run --name postgres -e POSTGRES_PASSWORD=password -d postgres`
   * Windows
    `docker run --name postgres -e POSTGRES_PASSWORD=password -d postgres`

   **Then start the container:**
   * `docker start postgres`

####  4. Test Postgres using PSQL from the command line
  * Execute `docker run -it --rm --link postgres:postgres postgres psql -h postgres -U postgres`
  * At the prompt type `SELECT 1;`
  * You should see 1 returned
  * Ctrl-D to exit

#### 5. Setup the capdash user
  * `createuser --createdb --login -P capdash`
  * Since this is local, you can use an insecure password: `capdash`
  * If the `createuser` executable does not exist, create the user in PSQL (use the docker command from #4)
  * Create the user: `CREATE USER capdash CREATEDB PASSWORD 'capdash';`

#### 6. Make sure postgres container is using the default port
  * Run Kitematic
  * click the sprocket next to the postgres container
  * You should see 5432 for the Docker port and localhost:5432 for the host port.
  * If you don't, then add the host port and press save.

----
### Backend

####  1. Install Ruby Version Manager (rvm)
  * You may skip to installing Ruby, if you are using Windows.
  * Execute `\curl https://raw.githubusercontent.com/rvm/rvm/master/binscripts/rvm-installer | bash -s stable
`
  * Check out your .bash_profile file.  It should have rvm in it.  You should create a new shell to pick up the new settings.
  * Test `which rvm`
  * You should see something like this: `/Users/ckstrong/.rvm/bin/rvm`

####  2. Install Ruby

  * **Installation for Windows**
    * Install with chocolatey: `choco install ruby` and `choco install ruby2.devkit`
    * Also available through [RubyInstaller](https://rubyinstaller.org/downloads/). Make sure you install both Ruby and the devkit.
    * Ruby 2.3 appears to be the most recent available on Windows

  * **Installation for Mac / Linux**
    * See latest version [here](https://www.ruby-lang.org/en/downloads/releases/)
    * Install version 2.4.0 `rvm install 2.4.0`
    * Generate docs `rvm docs generate-ri`
    * Set 2.4.0 to be the default version `rvm use 2.4.0`
    * Make sure everything is set correctly: `rvm ls`
    * Check which Ruby you are using `ruby -v` You should see 2.4.0

####  3. Install Rails
  * Install version 5.0.2 `gem install rails --version=5.0.2 --no-ri --no-rdoc`
  * Validate the install `gem list --local rails`

####  4. Install JetBrains RubyMine
  * [Download RubyMine](https://www.jetbrains.com/ruby/download/)
  * You should have the latest version (`2017.1.3` as of 5/20/2017)
  * Go to Preferences/Version Control/GitHub and generate token, then test it
  * This will make sure that RubyMine still works if you move to 2FA

####  5. Install Postgres
  * **Installation for Windows**
    * Not sure if necessary, but you can install Postgres:
    * Through Chocolatey: `choco install postgresql` and `choco admin pgadmin3`
    * From [the site](https://www.postgresql.org/download/windows/)

  * **Installation for Mac / Linux**
    * So far, the only way I have gotten this to work is to install Postgres locally
    * We won't actually use this instance, since we are using the Postgres Docker image, but we need the header files in order to compile the pg gem
    * This part of the configuration could be improved
    * We will use [these instructions](https://www.moncefbelyamani.com/how-to-install-postgresql-on-a-mac-with-homebrew-and-lunchy/)
    * `brew update`
    * `brew doctor`
    * `brew install postgresql`

####  6. Install Postgres Ruby Gem
  * `gem install pg`

####  7. Uninstall Postgres
  * There has got to be a better way: `brew uninstall postgresql`
  * We just installed postgres to get pg and then uninstalled it immediately

####  8. Load the server project, build and run
  * In RubyMine load capdash2-server project
  * We are using [these instructions](https://www.digitalocean.com/community/tutorials/how-to-setup-ruby-on-rails-with-postgres)
  * `bundle install`
  * `rails db:setup`
  * `rails db:migrate`
  * `rails server`
