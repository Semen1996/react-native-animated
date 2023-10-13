import {View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store, { persistor } from './store';
import Navigator from './navigation/Navigator';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
          <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
          <Navigator />
        </View>
      </PersistGate>
    </Provider>
  );
}

export default App;
