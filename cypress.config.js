const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //this is for generating html reports
  reporterOptions: {
    charts: true,
    reportPageTitle: 'YEBO REPORT',

    
  },
  
  e2e: {
    
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
      this.screenshotOnRunFailure = true;
     
      video=true;
      require('cypress-mochawesome-reporter/plugin')(on); 
      
    },
   // specPattern: "cypress/e2e/yebo1/*.js"
    specPattern: "cypress/integration/yebo/*.js",
    
      "retries": {
        // Configure retry attempts for `cypress run`
        // Default is 0
        "runMode": 15,
        // Configure retry attempts for `cypress open`
        // Default is 0
        "openMode": 15
      }
    
  },
  env:
  {
    url: "http://localhost:5555/login",
    uat:"https://nft-revive.uat.volary.tech/login",
    sandbox:"https://nft-revive.sandbox.volary.tech/home",
    qa:"https://nft-revive.qa.volary.tech/login"

  },
  video: true


});
