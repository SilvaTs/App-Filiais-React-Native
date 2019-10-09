import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from '~/pages/welcome';
import Filiais from '~/pages/Filiais';

const Routes = createAppContainer(
  createSwitchNavigator({
  Welcome,
  Filiais,
})
)

export default Routes;
