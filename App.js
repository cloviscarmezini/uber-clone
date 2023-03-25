import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { Home } from './src/screens/Home';
import { store } from './src/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Home />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </Provider>
  );
}