import React from "react";
import Wellcome from "./src/screens/wellcome"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import wellcomScreen from "./src/screens/wellcome";
import SignIn from "./src/screens/signIn";
import Signup from "./src/screens/signUp";
import wellcom from "./src/screens/wellcome";

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Wellcome' component={Wellcome}/>
        <Stack.Screen name='SignUp' component={Signup}/>
        <Stack.Screen name='SignIn' component={SignIn}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;