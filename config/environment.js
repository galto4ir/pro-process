/* eslint-env node */
"use strict";

module.exports = function(environment) {
  let ENV = {
    modulePrefix: "pro-process",
    environment,
    rootURL: "/",
    locationType: "auto",
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    locationType: "auto",
    // ...
    firebase: {
      apiKey: "AIzaSyA9W0nJjAMe-7vM2htM1ZPxtAw7Gl8UWC4",
      authDomain: "pro-process.firebaseapp.com",
      databaseURL: "https://pro-process.firebaseio.com",
      storageBucket: ""
    },

    // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      "script-src": "'self' 'unsafe-eval' apis.google.com",
      "frame-src": "'self' https://*.firebaseapp.com",
      "connect-src": "'self' wss://*.firebaseio.com https://*.googleapis.com"
    }
  };

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
  }

  if (environment === "production") {
    // here you can enable a production-specific feature
  }

  return ENV;
};
