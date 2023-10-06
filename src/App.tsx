import {View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import Navigator from './navigation/Navigator';

function App() {
  return (
    <Provider store={store}>
      <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
        <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
        <Navigator />
      </View>
    </Provider>
  );
}

export default App;
