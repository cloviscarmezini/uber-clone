import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './src/screens/Home';
import { MapScreen } from './src/screens/Map';

import { store } from './src/store';

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            className="flex-1"
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
          >
            <Navigator
              screenOptions={{
                headerShown: false
              }}
            >
              <Screen
                name='home'
                component={HomeScreen}
              />
              <Screen
                name='map'
                component={MapScreen}
              />
            </Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}