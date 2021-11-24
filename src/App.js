import { getConfig } from "@testing-library/dom";
import { isEmpty } from "lodash";
import Login from "./componentes/Login";
import Home from "./componentes/Home";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
};

export default App;