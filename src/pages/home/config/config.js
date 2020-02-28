import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {stylesConfig} from '../../../styles/styleConfig';
import SafeAreaView from 'react-native-safe-area-view';

export function Config({navigation}){
    return(
      <SafeAreaView style={stylesConfig.backgroundConfig}>
        <View style={stylesConfig.containerConfig}>
        <TextInput
          style={stylesConfig.inputPesquisa}
          placeholder="Pesquisa"
          autoCorrect={true}
          onChangeText={() => {}}
          />

          <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> navigation.navigate('Notificaçao')}>
            <Text style={stylesConfig.confgText}>Notificações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> navigation.navigate('PrivacidadeConfg')}>
            <Text style={stylesConfig.confgText}>Privacidade</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> navigation.navigate('Segurança')}>
            <Text style={stylesConfig.confgText}>Segurança</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> navigation.navigate('Ajuda')}>
            <Text style={stylesConfig.confgText}>Ajuda</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
  
    );
  }

  