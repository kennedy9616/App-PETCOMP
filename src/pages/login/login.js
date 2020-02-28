import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {stylesLogin} from '../../styles/styleLogin';

export function Login({ navigation }) {
    return (
      <SafeAreaView style={stylesLogin.backgroundLogin}>
        <StatusBar barStyle="light-content" backgroundColor="#222" />
          <View style={stylesLogin.Logo}>
            <Image source={require('../../image/facubook.png')}/>
          </View>
  
        <View style={stylesLogin.container}>
          <TextInput
            style={stylesLogin.input}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={() => {}}
          />
  
          <TextInput
            style={stylesLogin.input}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={() => {}}
          />
  
          <TouchableOpacity style={stylesLogin.btnSubmit} onPress={()=> navigation.navigate('Home')}>
            <Text style={stylesLogin.registerText}>Acessar</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={stylesLogin.btnRegister} onPress={()=>navigation.navigate('Conta')}>
            <Text style={stylesLogin.registerText}>Criar conta gratuita</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesLogin.btnRegister} onPress={()=>navigation.navigate('Privacidade')}>
            <Text style={stylesLogin.registerText}>Politica de privacidade</Text>
          </TouchableOpacity>
          </View>
      </SafeAreaView>
    );
  }