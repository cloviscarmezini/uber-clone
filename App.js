import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { Home } from './src/screens/Home';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
      <StatusBar style="auto" />
    </Provider>
  );
}