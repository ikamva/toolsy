// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA__gJ0dQeAtLVtlDuHek5OSAgOa9CIF3k",
    authDomain: "toolsy-d48be.firebaseapp.com",
    databaseURL: "https://toolsy-d48be.firebaseio.com",
    projectId: "toolsy-d48be",
    storageBucket: "toolsy-d48be.appspot.com",
    messagingSenderId: "1084532886347",
    appId: "1:1084532886347:web:f5d1ecf7a12224fac9f6ce",
    measurementId: "G-GK8HQPHXWZ"
  },
  algolia: {
    apiKey: "785fbd748dd270087e5bc9b915ca3cad",
    appID: "QN03XAFM63"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
