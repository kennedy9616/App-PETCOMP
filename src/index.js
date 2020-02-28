import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Login} from './pages/login/login';
import {Privacidade} from './pages/login/privacidade';
import {Conta} from './pages/login/conta';
import {Feed} from './pages/home/feed';
import {Pesquisa} from './pages/home/pesquisa';
import {Perfil} from './pages/home/perfil';
import {Config} from './pages/home/config/config';
import {Ajuda} from './pages/home/config/pages/ajuda';
import {PrivacidadeConfg} from './pages/home/config/pages/privacidade';
import {Notificaçao} from './pages/home/config/pages/notificaçao';
import {Segurança} from './pages/home/config/pages/segurança';
import {Senha} from './pages/home/config/pages/segurança/senha';
import {Tempo} from './pages/home/config/pages/notificacao/tempo';
import {FaleConosco} from './pages/home/config/pages/ajuda/faleconosco';
import {Dados} from './pages/home/config/pages/ajuda/dados';


const Tab = createBottomTabNavigator();

function HomeTab(){
  return(
    <Tab.Navigator>

      <Tab.Screen name='Feed' component={Feed}/>
      <Tab.Screen name='Pesquisa' component={Pesquisa}/>
      <Tab.Screen name="Config" component={Config}/>
      <Tab.Screen name='Perfil'component={Perfil}/>

    </Tab.Navigator>
  )
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={HomeTab}/>
          <Stack.Screen name="Conta" component={Conta}/>
          <Stack.Screen name="Privacidade" component={Privacidade}/>
          <Stack.Screen name="Ajuda" component={Ajuda}/>
          <Stack.Screen name="PrivacidadeConfg" component={PrivacidadeConfg}/>
          <Stack.Screen name="Segurança" component={Segurança}/>
          <Stack.Screen name="Notificaçao" component={Notificaçao}/>
          <Stack.Screen name="Senha" component={Senha}/>
          <Stack.Screen name="Tempo" component={Tempo}/>
          <Stack.Screen name="FaleConosco" component={FaleConosco}/>
          <Stack.Screen name="Dados" component={Dados}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
