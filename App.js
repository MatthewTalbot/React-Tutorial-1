import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import componentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: componentsScreen,
    List: ListScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
