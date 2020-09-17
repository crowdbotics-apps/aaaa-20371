import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile102978Navigator from '../features/UserProfile102978/navigator';
import Settings102977Navigator from '../features/Settings102977/navigator';
import Settings102975Navigator from '../features/Settings102975/navigator';
import SignIn2102973Navigator from '../features/SignIn2102973/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile102978: { screen: UserProfile102978Navigator },
Settings102977: { screen: Settings102977Navigator },
Settings102975: { screen: Settings102975Navigator },
SignIn2102973: { screen: SignIn2102973Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
