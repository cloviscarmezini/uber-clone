import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
      }}>
        <Text
          style={{
            color: '#FFF',
            fontSize: 36
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 48
            }}
          >
            Uber
          </Text>
          Clone
        </Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}