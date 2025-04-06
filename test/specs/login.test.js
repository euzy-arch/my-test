import blockedUser  from './testBlockedUser.js';
import authorizedUser  from './testAuthorizedUser.js';
import messagesTest from './testMessages.js';
import pageRefreshTest from './testPageRefresh.js';
import invalidLoginTest from './testInvalidLogin.js';
import integrationUser  from './testIntegrationUser.js';
import multiSessionTest from './testMultiSession.js';
import remoteUser  from './testRemoteUser.js';

describe('Login Tests Suite', () => {
    it('Test Blocked User', blockedUser );
    it('Test Remote User', remoteUser );
    it('Test Invalid Login', invalidLoginTest);
    it('Test Integration User', integrationUser );


    it('Test Authorized User', authorizedUser );
    // it('Test Messages', messagesTest);
    // it('Test Page Refresh', pageRefreshTest);
    // it('Test Multi Session', multiSessionTest);
});

// import { allure } from 'allure-commandline';
// import blockedUser  from './testBlockedUser .js';
// import authorizedUser  from './testAuthorizedUser .js';
// import messagesTest from './testMessages.js';
// import pageRefreshTest from './testPageRefresh.js';
// import invalidLoginTest from './testInvalidLogin.js';
// import integrationUser  from './testIntegrationUser .js';
// import multiSessionTest from './testMultiSession.js';
// import remoteUser  from './testRemoteUser .js';

// describe('Login Tests Suite', () => {
//     it('Test Blocked User', async () => {
//         allure.addStep('Testing blocked user');
//         await blockedUser ();
//     });
    
//     it('Test Remote User', async () => {
//         allure.addStep('Testing remote user');
//         await remoteUser ();
//     });
    
//     it('Test Invalid Login', async () => {
//         allure.addStep('Testing invalid login');
//         await invalidLoginTest();
//     });
    
//     it('Test Integration User', async () => {
//         allure.addStep('Testing integration user');
//         await integrationUser ();
//     });
    
//     it('Test Authorized User', async () => {
//         allure.addStep('Testing authorized user');
//         await authorizedUser ();
//     });
    
//     // it('Test Messages', async () => {
//     //     allure.addStep('Testing messages');
//     //     await messagesTest();
//     // });
    
//     // it('Test Page Refresh', async () => {
//     //     allure.addStep('Testing page refresh');
//     //     await pageRefreshTest();
//     // });
    
//     // it('Test Multi Session', async () => {
//     //     allure.addStep('Testing multi session');
//     //     await multiSessionTest();
//     // });
// });
