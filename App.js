import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Authorize";
import Home from "./src/screens/Home";
import Comment from "./src/screens/Comment";

const Stack = createStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown: false}}>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Comment" component={Comment} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
