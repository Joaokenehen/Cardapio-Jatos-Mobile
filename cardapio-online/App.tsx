import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cardapio from "./screen/Cardapio";
import Detalhes from "./screen/Detalhes";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cardapio">
        <Stack.Screen
          name="Cardapio"
          component={Cardapio}
          options={{ headerShown: false }} // Isso oculta a barra de navegação para esta tela
        />
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
