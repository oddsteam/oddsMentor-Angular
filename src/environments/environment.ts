// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    apiUrl: 'http://159.138.240.167:8087',
    // apiUrl: 'localhost:8080',
    discordUrl:
        'https://discord.com/api/webhooks/994429221705351338/VJx4TreAciMRFJUH6pG4BRvHXgmKNmaVL51xs8vy77YlLza-k1r3m4YN9bIbAdvF2CY8',
    firebaseConfig: {
        apiKey: 'AIzaSyDt9i-KETx1zwB_vvbmE8FwFk6ZymBlcfc',
        authDomain: 'odds-mentor.firebaseapp.com',
        projectId: 'odds-mentor',
        storageBucket: 'odds-mentor.appspot.com',
        messagingSenderId: '977574713746',
        appId: '1:977574713746:web:6a62473867364433dd094b',
        measurementId: 'G-BDVC3MXY06',
    },
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
