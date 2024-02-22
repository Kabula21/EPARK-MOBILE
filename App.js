import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Cadastro, BemVindo, Painel, Perfil, Card, Veiculo } from "./screens";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();


export default function App() {
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Bem Vindo'
      >
        <Stack.Screen
          name="Bem Vindo"
          component={BemVindo}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerShown: false
          }}
        />  

        <Stack.Screen
          name="Painel"
          component={Painel}
          options={{
            headerShown: false
          }}
        /> 

        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Card"
          component={Card}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Veículo"
          component={Veiculo}
          options={{
            headerShown: false
          }}
        />      

      </Stack.Navigator>
    </NavigationContainer>
  );
}
