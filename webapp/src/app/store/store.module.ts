import {NgModule} from '@angular/core';

// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import {NgReduxModule, NgRedux, DevToolsExtension} from '@angular-redux/store';
import {NgReduxRouterModule, NgReduxRouter} from '@angular-redux/router';
import {provideReduxForms} from '@angular-redux/form';
//import createLogger from 'redux-logger';
//import {autoRehydrate, persistStore} from 'redux-persist';

// Redux ecosystem stuff.
//import { combineEpics, createEpicMiddleware } from 'redux-observable';

// The top-level reducers and epics that make up our app's logic.
import {IAppState} from './root.types';
import {rootReducer} from './root.reducer';
import {RootEpics} from './root.epics';

// Hack to avoid "Initializers are not allowed in ambient contexts.  webpack: Failed to compile."
const persistStore = require('redux-persist').persistStore;
const autoRehydrate = require('redux-persist').autoRehydrate;

@NgModule({
  imports: [NgReduxModule, NgReduxRouterModule],
  providers: [RootEpics],
})
export class StoreModule {
  constructor(public store: NgRedux<IAppState>,
              devTools: DevToolsExtension,
              ngReduxRouter: NgReduxRouter,
              rootEpics: RootEpics,) {
    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    store.configureStore(
      rootReducer,
      {},
      [/*createLogger(),*/ ...rootEpics.createEpics()],
      devTools.isEnabled() ? [autoRehydrate(), devTools.enhancer()] : [autoRehydrate()]);

    // Enable syncing of Angular router state with our Redux store.
    ngReduxRouter.initialize();

    // Enable syncing of Angular form state with our Redux store.
    provideReduxForms(store);

    // begin periodically persisting the store
    persistStore(store, {blacklist: ['router']});

  }
}
