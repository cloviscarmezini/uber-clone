import { Provider } from 'react-redux';
import { store } from './src/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Home } from './src/screens/Home';
import { Map } from './src/screens/Map';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            <Screen
              name='home'
              component={Home}
            />
            <Screen
              name='map'
              component={Map}
            />
          </Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}