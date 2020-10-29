import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import AccountScreen from './src/screens/AccountScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import Context, { Provider } from './src/context/userContext';
 
const AuthStack = createStackNavigator()
 
const AuthStackScreen = () => {
  return(
  <AuthStack.Navigator>
    <AuthStack.Screen  name="Signin" component={SigninScreen} />
    <AuthStack.Screen  name="Signup" component={SignupScreen} />
  </AuthStack.Navigator>
)}
 
const TrackListStack = createStackNavigator()
 
const TrackListScreens = () => (
  <TrackListStack.Navigator initialRouteName="TrackList">
    <TrackListStack.Screen name="TrackList" component={TrackListScreen} />
    <TrackListStack.Screen name="TrackDetail" component={TrackDetailScreen} />
  </TrackListStack.Navigator>
)
 
const AppStack = createBottomTabNavigator()
 
const AppStackScreen = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="TrackListStack" component={TrackListScreens}/>
    <AppStack.Screen name="TrackCreate" component={TrackCreateScreen}/>
    <AppStack.Screen name="Account" component={AccountScreen}/>
  </AppStack.Navigator>
)
 
const App = () => {
  const { user } = React.useContext(Context);
  return (
    <NavigationContainer>
      {user === '' ? (
          <AuthStackScreen />
        ) : (
          <AppStackScreen />
        )
      }
    </NavigationContainer>
  )
}

export default () => (
  <Provider>
    <App/>
  </Provider>
)