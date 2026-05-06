import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screeens/login';


const Stack = createNativeStackNavigator();

function StackNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          
        </Stack.Navigator>
    )
}

function AppRoutes(){
    return(
        
            <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
       
    )
}
export default AppRoutes;