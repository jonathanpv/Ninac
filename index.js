import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import App from './src/App.js';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
if (__DEV__) {
    activateKeepAwake();
  }

registerRootComponent(App);
