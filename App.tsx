import { StatusBar } from 'expo-status-bar';
import { NativeModules, Platform, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@rneui/themed'
import { Provider as StoreProvider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import reducers from './src/reducers';
import { LibraryList } from './src/components';

const { UIManager } = NativeModules;

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function App() {
  return (
    <StoreProvider store={createStore(reducers)}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto"/>
          <Text h1>Tech Stack!</Text>
          <LibraryList/>
        </SafeAreaView>
      </SafeAreaProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
