import Reactotron from 'reactotron-react-native'


if(__DEV__){
const tron = Reactotron.configure()
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  // controls connection & communication settings
  .useReactNative()
  .connect()

  console.tron = tron;

  tron.clear();
}
